# 🚀 Frontend de Elhacker.net!

Sitio web construido con React.

## Entorno de desarrollo

[Servidor de desarrollo de elhacker.net](htttps://web.elhacker.net)

## Desarrollo

El repositorio usa la extensión LFS, lo que significa que se necesita instalar para revisar las imagenes (y el sitio web) correctamente. Puedes revisar la documentación de como instalar la extensión [aquí](https://github.com/git-lfs/git-lfs/wiki/Installation).

El primer paso sería clonar el repositorio usando HTTPS o SSH.

Para SSH (se necesita llave SSH).
```
git clone git@github.com:elhacker-net/web-nuevo.git && cd web-nuevo
```

Para HTTPS:
```
git clone https://github.com/elhacker-net/web-nuevo.git && cd web-nuevo
```

Después hacer checkout de la rama `dev`:

```
git checkout dev
```

Instalar las dependencias del proyecto (desarrollo incluido)

```
npm install
```

Después simplemente puedes correr el script `start` para empezar `webpack-dev-server`.

```
npm start
```

El servidor es accesible desde `http://127.0.0.1:8080`.

Para hacer externo el servidor:

```
npm start -- --host 0.0.0.0
```

### Nota Importante

El paquete está configurado para que el repositorio use los hooks que instala `husky`. Si usas Git LFS y haz hecho una instalación global (comportamiento por defecto) se añadiran hooks al repositorio que `husky` no puede sobreescribir. Lo recomendable es que corras el comando para desintalar los hooks.

```
git lfs uninstall
```

Y volver a reconstruir husky

```
npm rebuild husky
```

De esta manera `husky` puede manejar los hooks del repositorio y de LFS.
