# README.md

````md id="kl2d9s"
# SaaS Mobile App UI – React Native + Expo Router

Plantilla mobile UI tipo SaaS desarrollada con React Native usando Expo Router y TypeScript.

El proyecto está enfocado únicamente en maquetado visual moderno y arquitectura escalable, ideal como base para futuros desarrollos funcionales.

---

# Tecnologías utilizadas

- React Native
- Expo
- Expo Router
- TypeScript
- React Navigation
- Expo Vector Icons

---

# Características

- Diseño moderno estilo SaaS premium
- Arquitectura escalable
- Navegación con Tabs
- Soporte para Dark Mode
- Componentes reutilizables
- Pantallas completamente responsivas

---

# Pantallas incluidas

## Dashboard
Pantalla principal con:
- KPIs
- Analytics
- Actividad reciente
- Cards premium

## Login
Pantalla de autenticación visual:
- Email
- Password
- CTA principal

## Registro
Formulario visual para:
- Crear cuenta
- Inputs modernos
- Diseño SaaS

## Perfil
Pantalla de usuario:
- Avatar
- Información personal
- Logout UI

---

# Arquitectura del proyecto

```txt
app/
├── _layout.tsx
├── login.tsx
├── register.tsx
├── dashboard.tsx
├── profile.tsx
├── (tabs)/
│   ├── _layout.tsx
│   ├── index.tsx
│   └── two.tsx

components/
├── Themed.tsx
├── ExternalLink.tsx
├── StyledText.tsx
├── useColorScheme.ts

constants/
└── Colors.ts
````

---

# Explicación de la arquitectura

## app/

Contiene todas las screens y navegación del proyecto usando Expo Router.

### _layout.tsx

Archivo raíz encargado de:

* Configurar navegación global
* ThemeProvider
* Splash Screen
* Stack Navigation

### (tabs)/

Contiene navegación tipo Bottom Tabs.

---

## components/

Contiene componentes reutilizables y helpers.

### Themed.tsx

Componente encargado de:

* Manejar colores dinámicos
* Soporte Light/Dark Mode
* Wrapper de Text y View

### useColorScheme.ts

Hook para detectar el tema actual del dispositivo.

---

## constants/

### Colors.ts

Archivo centralizado de colores globales:

* Light mode
* Dark mode
* Colores de navegación

---

# Instalación del proyecto

## 1. Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

---

## 2. Entrar al proyecto

```bash
cd nombre-del-proyecto
```

---

## 3. Instalar dependencias

```bash
npm install
```

o

```bash
yarn install
```

---

# Iniciar el proyecto

## Levantar servidor Expo

```bash
npx expo start
```

---

# Ejecutar en dispositivos

## Android

Presiona:

```bash
a
```

en la terminal de Expo.

---

## iOS

Presiona:

```bash
i
```

(Solo disponible en macOS)

---

## Web

Presiona:

```bash
w
```

---

# Recomendaciones para desarrollo

## Crear nuevas pantallas

Agregar nuevas screens dentro de:

```txt
app/
```

Ejemplo:

```txt
app/settings.tsx
```

Expo Router generará automáticamente la ruta.

---

## Crear componentes reutilizables

Agregar componentes dentro de:

```txt
components/
```

Ejemplo:

```txt
components/ui/
```

---

## Manejo de estilos

Actualmente el proyecto utiliza:

* StyleSheet de React Native
* Diseño modular
* Paleta centralizada

---

# Paleta principal

```txt
Background: #020617
Cards: #0F172A
Primary: #2563EB
Text: #FFFFFF
Secondary Text: #94A3B8
```

---
```
