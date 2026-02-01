# Guide : Connecter un domaine à votre site

Ce guide vous explique comment connecter votre domaine personnalisé à votre site web statique.

## Options d'hébergement populaires

### Option 1 : Netlify (Recommandé - Gratuit)

#### Étape 1 : Déployer votre site sur Netlify

1. Allez sur [netlify.com](https://www.netlify.com) et créez un compte
2. Glissez-déposez votre dossier de site dans Netlify Drop, ou
3. Connectez votre dépôt GitHub/GitLab pour un déploiement automatique

#### Étape 2 : Configurer le domaine

1. Dans votre tableau de bord Netlify, allez dans **Domain settings**
2. Cliquez sur **Add custom domain**
3. Entrez votre domaine (ex: `zlatabeltran.com`)
4. Suivez les instructions pour configurer les DNS

#### Étape 3 : Configurer les DNS chez votre registrar

**Si vous utilisez un sous-domaine (www.zlatabeltran.com) :**
- Type : `CNAME`
- Nom : `www`
- Valeur : `votre-site.netlify.app`

**Si vous utilisez le domaine racine (zlatabeltran.com) :**
- Type : `A`
- Nom : `@` ou laissez vide
- Valeur : `75.2.60.5` (adresse IP de Netlify)

**Pour rediriger www vers le domaine racine :**
- Netlify gère automatiquement cette redirection

---

### Option 2 : Vercel (Gratuit)

#### Étape 1 : Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com) et créez un compte
2. Importez votre projet (glissez-déposez ou connectez GitHub)
3. Vercel déploiera automatiquement votre site

#### Étape 2 : Ajouter le domaine

1. Dans votre projet Vercel, allez dans **Settings** > **Domains**
2. Ajoutez votre domaine
3. Vercel vous donnera les enregistrements DNS à configurer

#### Étape 3 : Configurer les DNS

**Pour le domaine racine :**
- Type : `A`
- Nom : `@`
- Valeur : `76.76.21.21`

**Pour www :**
- Type : `CNAME`
- Nom : `www`
- Valeur : `cname.vercel-dns.com`

---

### Option 3 : GitHub Pages (Gratuit)

#### Étape 1 : Créer un dépôt GitHub

1. Créez un compte sur [github.com](https://github.com)
2. Créez un nouveau dépôt (ex: `zlatabeltran-site`)
3. Uploadez tous vos fichiers (index.html, styles.css, script.js, portrait.jpg)

#### Étape 2 : Activer GitHub Pages

1. Allez dans **Settings** > **Pages**
2. Sous **Source**, sélectionnez la branche `main` ou `master`
3. Votre site sera disponible sur `votre-username.github.io/votre-repo`

#### Étape 3 : Configurer le domaine personnalisé

1. Dans **Settings** > **Pages**, entrez votre domaine dans **Custom domain**
2. Créez un fichier `CNAME` à la racine avec votre domaine :
   ```
   zlatabeltran.com
   ```

#### Étape 4 : Configurer les DNS

**Pour le domaine racine :**
- Type : `A`
- Nom : `@`
- Valeurs (ajoutez les 4) :
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

**Pour www :**
- Type : `CNAME`
- Nom : `www`
- Valeur : `votre-username.github.io`

---

## Configuration DNS générale

### Où configurer les DNS ?

Les DNS se configurent chez votre **registrar de domaine** (là où vous avez acheté le domaine) :
- GoDaddy
- Namecheap
- OVH
- Google Domains
- Cloudflare
- etc.

### Types d'enregistrements DNS

- **A** : Pointe vers une adresse IP (pour le domaine racine)
- **CNAME** : Pointe vers un autre nom de domaine (pour les sous-domaines)
- **AAAA** : Version IPv6 de l'enregistrement A

### Temps de propagation

Les changements DNS peuvent prendre **24-48 heures** pour se propager dans le monde entier. En général, cela fonctionne en quelques minutes à quelques heures.

---

## Vérification

Après avoir configuré les DNS, vous pouvez vérifier :

1. **Vérifier la propagation DNS** : Utilisez [whatsmydns.net](https://www.whatsmydns.net) pour voir si vos DNS sont propagés
2. **Tester votre site** : Attendez quelques minutes puis visitez votre domaine
3. **Vérifier HTTPS** : La plupart des hébergeurs modernes fournissent automatiquement un certificat SSL gratuit

---

## Recommandations

1. **Utilisez HTTPS** : Assurez-vous que votre hébergeur fournit un certificat SSL gratuit
2. **Redirection www** : Configurez une redirection entre `www.votredomaine.com` et `votredomaine.com`
3. **Sauvegarde** : Gardez une copie locale de tous vos fichiers
4. **DNS rapides** : Considérez utiliser Cloudflare DNS pour de meilleures performances

---

## Besoin d'aide ?

Si vous rencontrez des problèmes :
- Vérifiez que tous les fichiers sont bien uploadés
- Vérifiez la syntaxe des enregistrements DNS
- Attendez la propagation DNS (peut prendre jusqu'à 48h)
- Contactez le support de votre hébergeur ou registrar



