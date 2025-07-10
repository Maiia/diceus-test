# Diceus Test App

A modern Angular 19 Single Page Application (SPA) demonstrating component architecture, routing, and interactive data visualization. Built for a frontend test assignment.

## 🚀 Live Demo

👉 [https://diceus-test.vercel.app](https://diceus-test.vercel.app)

---

## 🛠️ Technologies Used

- **Angular 19** — modern framework with Signals API and standalone components
- **Angular Signals** — for fine-grained, reactive state management
- **@angular/material** — Material Design UI components
- **Tailwind CSS** — utility-first CSS framework for rapid styling
- **ngx-apexcharts** — advanced interactive charting library for Angular
- **RxJS** — reactive programming for async streams
- **TypeScript** — statically typed JavaScript superset
- **Vercel** — serverless deployment and hosting platform

---

## 🤖 AI Tools Used

- **ChatGPT (GPT-4o)** 
- **Copilot** 


---

### 📁 Project Structure Overview

```text
.
### 📁 Project Structure Overview

```text
.
├── public/                         
│   └── mock-logos/                
│
├── src/
│   ├── app/
│   │   ├── core/                  
│   │   │   ├── config/           
│   │   │   ├── guards/
│   │   │   ├── mappers/
│   │   │   ├── models/
│   │   │   ├── services/
│   │   │   └── strategies/
│   │   ├── features/              
│   │   │   ├── components/
│   │   │   └── containers/
│   │   ├── shared/                
│   │   │   ├── components/
│   │   │   ├── constants/
│   │   │   ├── helpers/
│   │   │   ├── models/
│   │   │   └── pipes/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets/                    
│   │   ├── mocks/
│   │   ├── account/
│   │   └── dashboard/
│   ├── global.scss                
│   ├── styles.css                 
│   ├── index.html
│   └── main.ts
│
├── angular.json                   # Angular CLI config
├── package.json                   # Project dependencies and scripts
├── package-lock.json              # NPM lockfile
├── tailwind.config.ts             # TailwindCSS configuration
├── .postcssrc.json                # PostCSS plugins for Tailwind
├── .prettierrc                    # Code formatting rules
├── .editorconfig                  # Editor formatting preferences
├── .gitignore                     # Git exclusion rules
├── vercel.json                    # SPA fallback routing config for Vercel
├── setup-jest.ts                  # Jest setup file for Angular testing
├── tsconfig.app.json              # TS config for main app
├── tsconfig.spec.json             # TS config for unit tests
├── tsconfig.json                  # Root TypeScript config
└── README.md                      # Project description and setup
---

## 📦 Build & Deploy Instructions

### 🔧 Local Development

```bash
npm install
npm start       # or: ng serve
npm run build   # or: ng build --configuration production
