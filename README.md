# WINBACK Release Notes PWA

## 📱 À propos

Application Progressive Web App (PWA) permettant de consulter et gérer les notes de version des produits WINBACK. Cette application est conçue pour fonctionner aussi bien en ligne que hors ligne, offrant une expérience utilisateur optimale sur tous les appareils.

## 🚀 Fonctionnalités

- Interface responsive adaptée à tous les écrans
- Mode hors ligne grâce au Service Worker
- Installation possible sur l'écran d'accueil (PWA)
- Consultation des notes de version par produit
- Recherche rapide dans les notes de version
- Interface administrateur pour la gestion des notes
- Support multilingue (FR/EN)

## 🛠 Prérequis techniques

- Node.js (v14.0.0 ou supérieur)
- npm (v6.0.0 ou supérieur)
- Un navigateur moderne (Chrome, Firefox, Safari, Edge)
- Un éditeur de code (VS Code recommandé)

## 📦 Installation

1. Cloner le repository

```bash
git clone [https://github.com/SrgMlkWB/ReleaseNotesFinal.git]
cd winback-release-notes
```

2. Installer les dépendances

```bash
npm install
```

3. Configuration de l'environnement

```bash
# Copier le fichier d'exemple de configuration
cp .env.example .env

# Éditer le fichier .env avec vos paramètres
nano .env
```

## 🔧 Configuration

### Variables d'environnement (.env)

```env
API_URL=http://localhost:3000
NODE_ENV=development
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=winback_notes
DB_USERNAME=root
DB_PASSWORD=your_password
```

### Base de données

1. Créer la base de données

```bash
mysql -u root -p
CREATE DATABASE winback_notes;
```

2. Exécuter les migrations

```bash
npm run migrate
```

3. (Optionnel) Charger les données de test

```bash
npm run seed
```

## 🚀 Démarrage

### Environnement de développement

```bash
# Démarrer le serveur de développement
npm run dev

# L'application sera accessible sur http://localhost:3000
```

### Production

```bash
# Build de production
npm run build

# Démarrer le serveur de production
npm start
```

## 🧪 Tests

```bash
# Exécuter tous les tests
npm test

# Tests unitaires uniquement
npm run test:unit

# Tests d'intégration
npm run test:integration

# Mode watch pour le développement
npm run test:watch
```

## 📚 Structure du projet

```
winback-release-notes/
├── src/                    # Code source
│   ├── api/               # API endpoints
│   ├── components/        # Composants réutilisables
│   ├── config/           # Fichiers de configuration
│   ├── database/         # Migrations et seeds
│   ├── models/           # Modèles de données
│   ├── public/           # Assets statiques
│   └── utils/            # Utilitaires
├── tests/                 # Tests
├── docs/                  # Documentation
└── scripts/              # Scripts utilitaires
```

## 🔒 Sécurité

- L'application utilise HTTPS en production
- Authentification via JWT
- Protection CSRF active
- Validation des entrées utilisateur
- Headers de sécurité configurés

## 🔄 Workflow de développement

1. Créer une nouvelle branche pour chaque feature

```bash
git checkout -b feature/nom-de-la-feature
```

2. Commiter les changements

```bash
git add .
git commit -m "Description des changements"
```

3. Pousser les changements et créer une Pull Request

```bash
git push origin feature/nom-de-la-feature
```

4. Code review et merge après validation

## 📝 Conventions de code

- ESLint pour le linting JavaScript
- Prettier pour le formatage
- Conventional Commits pour les messages de commit
- JSDoc pour la documentation du code

## 🐛 Débogage

1. Logs de développement

```bash
npm run dev:debug
```

2. Chrome DevTools

- Ouvrir Chrome DevTools (F12)
- Onglet "Application" pour inspecter le Service Worker
- Onglet "Network" pour le debugging réseau

## 📱 Test PWA

1. Build de production nécessaire

```bash
npm run build
```

2. Servir en HTTPS (requis pour PWA)

```bash
npm run serve:https
```

3. Vérifier dans Chrome :

- Lighthouse audit
- Onglet Application > Service Workers
- Test d'installation

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amazing-feature`)
3. Commit (`git commit -m 'feat: add amazing feature'`)
4. Push (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📫 Support

Pour toute question ou problème :

1. Consulter la documentation dans `/docs`
2. Ouvrir une issue sur le repository
3. Contacter l'équipe technique via Slack

## 📄 Licence

Propriétaire - WINBACK © 2024

## 🔄 Mises à jour

Pour mettre à jour l'application :

```bash
git pull origin main
npm install
npm run build
npm start
```

## 🏗 CI/CD

- Tests automatiques sur chaque PR
- Build et déploiement automatiques sur main
- Vérification de la qualité du code
- Tests de performance

## 📊 Monitoring

- Logs centralisés
- Métriques de performance
- Alertes configurées
- Dashboard de monitoring
