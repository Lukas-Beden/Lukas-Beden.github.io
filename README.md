# Portfolio - Développeur de Jeux Vidéo 🎮

Portfolio personnel avec une esthétique cyber-retro, conçu pour présenter des projets de développement de jeux vidéo.

## 🚀 Déploiement sur GitHub Pages

### 1. Créer le repository
1. Va sur GitHub et crée un nouveau repository nommé `username.github.io` (remplace `username` par ton nom d'utilisateur GitHub)
2. Clone le repository sur ton ordinateur :
```bash
git clone https://github.com/username/username.github.io.git
```

### 2. Ajouter les fichiers
1. Copie les fichiers `index.html`, `styles.css`, et `script.js` dans le dossier du repository
2. Commit et push :
```bash
cd username.github.io
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

### 3. Activer GitHub Pages
1. Va dans les Settings de ton repository
2. Dans la section "Pages" (menu de gauche)
3. Sous "Source", sélectionne la branche `main` et le dossier `/ (root)`
4. Clique sur "Save"
5. Ton site sera disponible à `https://username.github.io` dans quelques minutes !

## ✏️ Personnalisation

### Informations personnelles à modifier :

#### Dans `index.html` :

1. **Navigation et branding** (ligne 26)
   ```html
   <span class="glitch" data-text="DEV.GAMES">&lt;DEV.GAMES/&gt;</span>
   ```
   Change "DEV.GAMES" par ton pseudo ou nom

2. **Contact** (ligne 240-270)
   - Remplace `votre.email@example.com` par ton vrai email
   - Remplace `votreusername` par ton username GitHub
   - Remplace `votreprofil` par ton profil LinkedIn

3. **Liens des projets**
   - Pour chaque projet, remplace `href="#"` par l'URL de ton repository GitHub
   - Exemple : `href="https://github.com/username/procedural-generation"`

4. **Images/GIFs des projets**
   - Remplace les `<div class="project-placeholder">` par de vraies images ou GIFs
   - Crée un dossier `images/` et ajoute tes captures d'écran
   - Remplace les placeholders par :
   ```html
   <img src="images/projet1.gif" alt="Génération procédurale">
   ```

#### Dans `styles.css` :

Tu peux personnaliser les couleurs en modifiant les variables CSS (lignes 1-20) :
```css
--color-primary: #00ff88;  /* Couleur principale (vert néon) */
--color-secondary: #ff006e; /* Couleur secondaire (rose) */
--color-accent: #00d9ff;    /* Couleur d'accent (cyan) */
```

### Ajouter des images

1. Crée un dossier `images/` à la racine
2. Ajoute tes captures d'écran/GIFs de projets
3. Formate recommandé : 16:9 (1920x1080 ou 1280x720)
4. Formats acceptés : `.jpg`, `.png`, `.gif`, `.webp`

Exemple de structure :
```
username.github.io/
├── index.html
├── styles.css
├── script.js
├── README.md
└── images/
    ├── procedural-gen.gif
    ├── room-defenders.png
    ├── 2d-3d-switch.gif
    └── last-pulse.jpg
```

### Ajouter des démos jouables

Si tu as des builds WebGL de tes jeux Unity :
1. Crée un dossier `demos/projet-name/`
2. Exporte ton jeu en WebGL depuis Unity
3. Ajoute les fichiers dans ce dossier
4. Lie vers la démo dans ton projet

## 🎨 Fonctionnalités

- ✨ Système de particules animé en arrière-plan
- 🌟 Effet de scanlines rétro
- 🎯 Animations au scroll
- 📱 Design 100% responsive
- ⚡ Effet de glitch sur le logo
- 🖱️ Effet de lueur qui suit le curseur (desktop)
- 🔗 Navigation smooth scroll

## 🛠️ Technologies utilisées

- HTML5
- CSS3 (variables CSS, Grid, Flexbox, animations)
- JavaScript Vanilla (Canvas API, Intersection Observer)
- Google Fonts (Orbitron, JetBrains Mono)

## 📝 Conseils pour un bon portfolio

1. **Images de qualité** : Utilise des GIFs animés pour montrer le gameplay
2. **Descriptions claires** : Explique tes contributions spécifiques
3. **Code accessible** : Assure-toi que tes repos GitHub sont publics
4. **Mises à jour régulières** : Ajoute de nouveaux projets au fur et à mesure
5. **Analytics** : Ajoute Google Analytics pour suivre les visites (optionnel)

## 🔧 Améliorations futures possibles

- [ ] Ajouter un blog/devlog
- [ ] Intégrer des démos WebGL jouables
- [ ] Ajouter une section "Skills" avec des barres de progression
- [ ] Mode sombre/clair (toggle)
- [ ] Multilingue (FR/EN)
- [ ] Section témoignages/recommandations
- [ ] Intégration avec itch.io

## 📄 Licence

Libre d'utilisation - Personnalise-le à ta guise !

---

**Note** : N'oublie pas de mettre à jour le projet "The Last Pulse" une fois que tu auras du contenu à montrer !

Pour toute question ou suggestion, n'hésite pas à ouvrir une issue sur GitHub.

Bon courage pour tes projets ! 🚀
