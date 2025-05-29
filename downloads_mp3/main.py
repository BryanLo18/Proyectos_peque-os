import yt_dlp
import os

def descargar_musica(url, carpeta="Musica"):
    try:
        if not os.path.exists(carpeta):
            os.makedirs(carpeta)

        opciones = {
            'format': 'bestaudio/best',
            'outtmpl': os.path.join(carpeta, '%(title)s.%(ext)s')
        }

        print(f"Descargando música de {url}...")
        with yt_dlp.YoutubeDL(opciones) as ydl:
            ydl.download([url])
        print(f"Música descargada en la carpeta: {carpeta}")
    except Exception as e:
        print(f"Error al descargar la música: {e}")

if __name__ == "__main__":
    url = input("Introduce la URL del video de YouTube: ")
    descargar_musica(url, r"C:\Users\bryan\Desktop\Musica_prueba")
