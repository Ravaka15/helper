# Backoffice App

Application backoffice Next.js avec TypeScript et shadcn/ui.

## Structure du projet

```
app/                    # Routes Next.js (App Router)
components/             # Composants réutilisables
  ├── ui/              # Composants shadcn/ui
  └── shared/          # Composants partagés
features/              # Logique métier par feature
  ├── auth/            # Authentification
  ├── dashboard/
  └── assistant/
shared/                # Code global partagé
  ├── utils/
  ├── hooks/
  ├── types/
  ├── api-client.ts
  └── constants.ts
public/                # Assets statiques
```

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Composants shadcn/ui

Les composants shadcn/ui sont déjà installés et configurés :
- Button
- Input
- Label
- Card

### Ajouter de nouveaux composants shadcn/ui

```bash
npx shadcn@latest add [component-name]
```

Exemples :
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add table
```

### Utilisation des composants

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mon titre</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Entrez du texte" />
        <Button>Cliquez-moi</Button>
      </CardContent>
    </Card>
  );
}
```

## Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Crée le build de production
- `npm start` - Démarre le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## Fonctionnalités

- ✅ Page de login avec formulaire stylisé
- ✅ Dashboard (à implémenter)
- ✅ Assistant (à implémenter)
- ✅ Architecture clean avec séparation des features
- ✅ Composants shadcn/ui configurés
- ✅ TypeScript strict
- ✅ Tailwind CSS avec variables CSS personnalisées
