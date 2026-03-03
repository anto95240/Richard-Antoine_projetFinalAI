# 🕰️ ChronoVoyage - Agence de Voyage Temporel

## 📝 Titre & Description
**ChronoVoyage** est une application web innovante simulant une agence de voyage dans le temps. Elle permet aux utilisateurs d'explorer et de "réserver" des séjours historiques immersifs (comme Paris lors de l'Exposition Universelle de 1889, le Crétacé au milieu des dinosaures, ou encore Florence en 1504). Le site intègre **ChronoBot**, un assistant virtuel interactif chargé d'accompagner les voyageurs dans le choix de leur aventure temporelle.

## 🛠️ Stack technique
Ce projet est construit avec des technologies web modernes et performantes :
* **React (v18)** : Bibliothèque front-end pour la création d'interfaces utilisateurs.
* **TypeScript** : Pour un typage statique et un code plus robuste.
* **Vite** : Outil de build extrêmement rapide.
* **Tailwind CSS** & **shadcn-ui** : Pour une conception de l'interface esthétique, responsive et modulaire.
* **Framer Motion** : Pour la gestion des animations fluides de l'interface (notamment le ChatBot).

## ✨ Features implémentées
* **Interface vitrine complète** : Navigation (Navbar), section d'accueil (HeroSection), guide d'utilisation (HowItWorks), témoignages (Testimonials) et Footer.
* **Catalogue de destinations (DestinationCards)** : Présentation des différentes époques disponibles avec détails et tarification en "ChronoCrédits".
* **ChronoBot (Assistant Virtuel)** : Un chatbot interactif flottant doté de réponses rapides (Quick Replies), d'un indicateur de frappe (Typing indicator) et d'un système d'assistance contextuelle pour répondre aux questions sur les destinations, les prix et la sécurité.

## 🤖 Outils IA utilisés
* **Mistral AI** : Intégré/utilisé pour la conception de la logique conversationnelle et la génération des réponses intelligentes de l'assistant.
* **Lovable / Génération de code assistée par IA** : Utilisé pour le scaffolding initial de l'application, l'intégration des composants shadcn-ui et l'accélération du développement.

## 🚀 Instructions d'installation

Pour exécuter ce projet localement, assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre machine, puis suivez ces étapes :

```bash
# 1. Clonez le dépôt
git clone https://github.com/anto95240/Project-final-IA

# 2. Accédez au répertoire du projet
cd src

# 3. Installez les dépendances
npm install

# 4. Lancez le serveur de développement
npm run dev
