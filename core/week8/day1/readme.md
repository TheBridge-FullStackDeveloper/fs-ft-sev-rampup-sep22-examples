# sistema de directorios ubuntu
# https://help.ubuntu.com/community/LinuxFilesystemTreeOverview

# Gestor de paquetes 

## Aptualiza repositorio de pquetes
sudo apt updates

# Lista paquetes instalados
sudo apt list

## Install packages
sudo apt install nombrePaquetes

# Navegar por el sistema de archos

## Imprime el directorio de trabajo actual
pwd
## ls lista ficheros y directorios
cd pathDeDestino

## moverse al directorio root
cd /

## moverse al directorio del usuario
cd 
cd ~
## ir a un directorio
cd nombreDirectorio

## Ir al nivel superior de directorios
cd ..


# Manipuular archivos y direcftorios

## Crear un directorio
mkdir test

## Renombrar un archivo o directorio
mv test test2

## mover un archivo o directorio

mv global.css /src/css/global.css

## Elimina archivo o directorio
rm hello.txt

## Elimina de forma recursiva directorios

rm -r nombreDirectorio

## Elimina de forma recursiva archivos y directorios

rm -rf nombreDirectoorio

# Editar y ver ficheros

## editar archivo.txt
nano archivo.txt

## ver contenido archivo.txt

cat archivo.txt

## ver con paginador more

## Ver con paginador less

## ver las primeras 10 lineas
head
## ver las primeras n lineas
head -n
## ver las ultimas 10 lineas
tail
## ver las ultimas n lineas
tail -n 

# Buscar texto

grep texto path
grep -i texto path
grep -i texto path
grep -i -r texto path

# Buscar archivos y directorios
find 
find --type d
find --type f


# Manejar procesos

## consultar procesos corriendo
ps 

## matar proceso
kill pid


# Usuarios

## Info usuario logueado
whoami




