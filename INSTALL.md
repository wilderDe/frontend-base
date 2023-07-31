# Manual de instalación

## Requisitos

Antes de continuar con la instalación del proyecto, es necesario que ya se hayan realizado las siguientes instalaciones:

1. [NodeJS](https://github.com/nodesource/distributions/blob/master/README.md): Versión 18
2. [NVM](https://github.com/nvm-sh/nvm) Se recomienda NVM solo para ambientes de DESARROLLO.

## Configuración

La configuración de las variables de entorno se encuentra en el archivo .env.sample, el cual se debe renombrar con .env

```bash
cp .env.sample .env
```

El anterior archivo debe contener las siguientes variables cuyos valores van a variar de acuerdo al ambiente. EJEMPLO:

```bash
NEXT_PUBLIC_APP_ENV=development
NEXT_PUBLIC_SITE_NAME="Frontend base"
NEXT_PUBLIC_BASE_URL="https://proyecto-base.test.gtic.gob.bo/ws/api"
```

- **NEXT_PUBLIC_APP_ENV**: Entorno donde se está ejecutando el proyecto, puede ser `development`, `test`, `production`
- **NEXT_PUBLIC_SITE_NAME**: Nombre de la aplicación web
- **NEXT_PUBLIC_BASE_URL**: URL de backend que consumira la aplicación

## Instalando el proyecto

Siga los siguientes pasos:

### Instalar dependencias

```bash
npm install
```

### Iniciar en modo desarrollo

```bash
npm run dev
```

### Iniciar en modo producción

1. Instalar PM2

   ```bash
   sudo npm i -g pm2
   ```

2. Cambiar en el archivo .env la variable de entorno y la ruta base_url:

   ```
   NEXT_PUBLIC_APP_ENV=production # importante
   NEXT_PUBLIC_SITE_NAME="Frontend base - Nombre de producción"
   NEXT_PUBLIC_PATH=""
   NEXT_PUBLIC_BASE_URL="URL de producción"
   ```

3. Compilar para produccion

   ```bash
   npm run build
   ```

4. Copiar el contenido generado en la carpeta `dist` a la carpeta de despliegue. Ej. apache, nginx, etc.

   > Opcional, ejemplo de configuración con reverse proxy en nginx

   ```
   server {
           listen 80 default_server;
               listen [::]:80 default_server;

           root /home/usuario/agetic-next-base-frontend; #Make sure your using the full path

           index index.html index.htm;

           server_name _;


           # Serve any static assets with NGINX
           location /_next/static {
               alias /home/usuario/agetic-next-base-frontend/.next/static;
               add_header Cache-Control "public, max-age=3600, immutable";
           }

           location / {
               try_files $uri.html $uri/index.html # only serve html files from this dir
               @public
               @nextjs;
               #add_header Cache-Control "public, max-age=3600";
           }

           location @public {
               add_header Cache-Control "public, max-age=3600";
           }

           location @nextjs {
               # reverse proxy for next server
               proxy_pass http://127.0.0.1:8080; #Don't forget to update your port number
               proxy_http_version 1.1;
               proxy_set_header Upgrade $http_upgrade;
               proxy_set_header Connection 'upgrade';
               proxy_set_header Host $host;
               proxy_cache_bypass $http_upgrade;
           }

           location /ws {
                       rewrite ^/ws/(.*) /$1 break;
                       proxy_pass http://127.0.0.1:3000;
           }
   }

   ```

5. Ejecutar el proyecto con PM2
   ```bash
   pm2 start "npm run start -- -p 8080" --name frontend
   ```
