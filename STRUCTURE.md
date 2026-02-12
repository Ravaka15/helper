# Structure de l'application

## Routes protégées

Les routes `/dashboard` et `/assistant` sont dans le dossier `app/(protected)/` qui utilise un layout commun avec :
- Menu latéral (Sidebar) à gauche
- Header en haut avec boutons Paramètres et Déconnexion
- Zone de contenu principale

## Navigation

### Page de login (/)
- Formulaire de connexion avec email et mot de passe
- Redirection vers `/dashboard` après connexion

### Dashboard (/dashboard)
- Cartes de statistiques avec icônes
- Graphiques (à implémenter)
- Vue d'ensemble des données

### Assistant (/assistant)
- Interface de chat
- Liste de messages avec timestamps
- Formulaire d'envoi de messages
- Réponses simulées (à connecter à une vraie API)

## Composants

### Sidebar
- Logo et nom de l'application
- Menu de navigation avec état actif
- Profil utilisateur en bas

### Header
- Titre de la section
- Boutons d'action (Paramètres, Déconnexion)

### Composants UI (shadcn/ui)
- Button - Boutons avec variantes
- Input - Champs de saisie
- Label - Labels de formulaire
- Card - Cartes de contenu

## Personnalisation

### Ajouter un élément au menu
Modifier `components/shared/sidebar.tsx` :

```tsx
const menuItems = [
  {
    title: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: "📊",
  },
  {
    title: "Assistant",
    href: ROUTES.ASSISTANT,
    icon: "💬",
  },
  // Ajouter ici
];
```

### Ajouter une nouvelle route protégée
1. Créer un dossier dans `app/(protected)/nouvelle-route/`
2. Créer `page.tsx` dans ce dossier
3. Ajouter la route dans `shared/constants.ts`
4. Ajouter l'élément au menu dans `sidebar.tsx`
