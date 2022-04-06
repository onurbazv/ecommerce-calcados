from bs4 import BeautifulSoup
from nanoid import generate
from glob import glob
from PIL import Image
import requests
import html5lib
import json
import shutil
import os


fake_header = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0"}

# Edit this to "single" if you want to scrape a single page, else enter pages in the urls.txt file for scraping multiple pages
mode = "multi"

def scrape(url):
    req = requests.get(url, headers=fake_header)
    soup = BeautifulSoup(req.text, "html5lib")
    attributes = []
    temp = soup.find_all("ul", class_="attributes")
    for t in temp:
        for li in t.find_all("li"):
            attributes.append(li)       
    description_section = soup.find("section", class_="short-description")
    nome = description_section.find("h1").text
    rating_value = float(description_section.find("span", class_="rating-box__value").text)
    rating_amount = int(description_section.find("span", class_="rating-box__numberOfReviews").text.replace("avaliações", ""))
    description = soup.find("p", itemprop="description").text
    price = float(soup.find("del", class_="default-price reduce").text.replace(",",".").replace("R$", ""))
    id = generate()
    try:
        marca = [entry.text.replace("Marca:", "").strip() for entry in attributes if "Marca:" in entry.text][0]
    except IndexError:
        marca = None
    try:
        genero = [entry.text.replace("Gênero:", "").strip() for entry in attributes if "Gênero:" in entry.text][0]
    except IndexError:
        genero = None
    try:
        indicacao = [entry.text.replace("Indicado para:", "").strip() for entry in attributes if "Indicado para:" in entry.text][0]
    except IndexError:
        indicacao = None
    try:    
        material = [entry.text.replace("Material:", "").strip() for entry in attributes if "Material:" in entry.text][0]
    except IndexError:
        material = None
    try:
        origem = [entry.text.replace("Origem:", "").strip() for entry in attributes if "Origem:" in entry.text][0]
    except IndexError:
        origem = None
    try:
        categoria = [entry.text.replace("Categoria:", "").strip() for entry in attributes if "Categoria:" in entry.text][0]
    except IndexError:
        categoria = None  
    try:
        pisada = [entry.text.replace("Pisada:", "").strip() for entry in attributes if "Pisada:" in entry.text][0]
    except IndexError:
        pisada = None  
    dict = {
        "id": id,
        "nome": nome,
        "tipo": "",
        "marca": marca,
        "genero": genero,
        "preco": price,
        "avaliacao": [rating_value, rating_amount],
        "tamanhos": [],
        "indicacao": indicacao,
        "material": material,
        "pisada": pisada,
        "categoria": categoria,
        "origem": origem,
        "descricao": description
    }
    with open(f"{id}.json", "w", encoding="utf8") as fp:
        json.dump(dict, fp, ensure_ascii=False) 
    wrapper = soup.find("section", class_="photo").find("ul", class_="swiper-wrapper")
    images = [img["data-src"].split("?")[0] for img in wrapper.find_all("img")]
    i = 0
    os.mkdir(id)
    for img_url in images:
        response = requests.get(img_url, stream=True)
        ext = img_url.split(".")[-1]
        with open(f"{i}.{ext}", "wb") as out_file:
            shutil.copyfileobj(response.raw, out_file)
        del response
        i += 1 
    for jpg in glob("*.jpg"):
        Image.open(jpg).save(f"{jpg.split('.')[0]}.webp")
        os.remove(jpg)  
    for webp in glob("*.webp"):
        shutil.move(webp, f"{id}/{webp}")


if mode == "single":
    u = input("Netshoes URL: ")
    scrape(u)
elif mode == "multi":
    for u in [x.strip() for x in open('urls.txt', 'r', encoding="utf8").readlines()]:
        print(f"Downloading {u}")
        scrape(u)