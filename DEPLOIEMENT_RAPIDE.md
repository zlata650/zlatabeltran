# 🚀 Guide de Déploiement Rapide

Ce guide vous permet de déployer rapidement votre site et de le connecter à votre domaine.

## ⚡ Option la plus rapide : Netlify (Recommandé)

### Étape 1 : Déployer sur Netlify (5 minutes)

1. **Allez sur [netlify.com](https://www.netlify.com)** et créez un compte gratuit
2. **Glissez-déposez votre dossier** directement dans Netlify Drop :
   - Allez sur [app.netlify.com/drop](https://app.netlify.com/drop)
   - Glissez tout le contenu du dossier "Zlata Beltran site" dans la zone de dépôt
   - Votre site sera en ligne immédiatement avec une URL comme `votre-site-123.netlify.app`

### Étape 2 : Connecter votre domaine (10 minutes)

1. Dans Netlify, allez dans **Site settings** > **Domain management**
2. Cliquez sur **Add custom domain**
3. Entrez votre domaine : `zlatabeltran.com`
4. Netlify vous donnera les instructions DNS à configurer

### Étape 3 : Configurer les DNS chez votre registrar

**Allez dans les paramètres DNS de votre registrar** (là où vous avez acheté le domaine) :

#### Pour le domaine racine (zlatabeltran.com) :
- **Type** : `A`
- **Nom** : `@` (ou laissez vide)
- **Valeur** : `75.2.60.5`

#### Pour www (www.zlatabeltran.com) :
- **Type** : `CNAME`
- **Nom** : `www`
- **Valeur** : `votre-site-123.netlify.app` (l'URL que Netlify vous a donnée)

### Étape 4 : Activer HTTPS (automatique)

Netlify fournit automatiquement un certificat SSL gratuit. Il sera activé automatiquement après la configuration DNS (peut prendre quelques minutes).

---

## 🌐 Alternative : Vercel

### Étape 1 : Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com) et créez un compte
2. Cliquez sur **Add New Project**
3. Glissez-déposez votre dossier ou connectez GitHub
4. Vercel déploiera automatiquement votre site

### Étape 2 : Ajouter le domaine

1. Dans votre projet, allez dans **Settings** > **Domains**
2. Ajoutez `zlatabeltran.com`
3. Vercel vous donnera les enregistrements DNS à configurer

### Étape 3 : Configurer les DNS

**Pour le domaine racine :**
- Type : `A`
- Nom : `@`
- Valeur : `76.76.21.21`

**Pour www :**
- Type : `CNAME`
- Nom : `www`
- Valeur : `cname.vercel-dns.com`

---

## 📋 Checklist de déploiement

- [ ] Tous les fichiers sont dans le dossier (index.html, index-fr.html, styles.css, script.js, script-fr.js, images)
- [ ] Site déployé sur Netlify/Vercel
- [ ] Domaine ajouté dans les paramètres de l'hébergeur
- [ ] DNS configurés chez le registrar
- [ ] Attente de la propagation DNS (5 minutes à 48 heures)
- [ ] HTTPS activé automatiquement
- [ ] Test du site sur le domaine

---

## ⏱️ Temps de propagation DNS

Les changements DNS peuvent prendre :
- **Minimum** : 5-10 minutes
- **Moyen** : 1-2 heures
- **Maximum** : 24-48 heures

Vous pouvez vérifier la propagation sur [whatsmydns.net](https://www.whatsmydns.net)

---

## 🔍 Vérification

1. **Testez votre site** : Visitez `http://zlatabeltran.com` (puis `https://zlatabeltran.com`)
2. **Vérifiez les deux versions** :
   - Version anglaise : `https://zlatabeltran.com`
   - Version française : `https://zlatabeltran.com/index-fr.html`
3. **Testez sur mobile** : Vérifiez que le menu hamburger fonctionne
4. **Vérifiez HTTPS** : Le cadenas vert doit apparaître dans le navigateur

---

## 🆘 Problèmes courants

### Le site ne charge pas après la configuration DNS
- Attendez 10-30 minutes pour la propagation DNS
- Vérifiez que les enregistrements DNS sont corrects
- Vérifiez sur [whatsmydns.net](https://www.whatsmydns.net)

### HTTPS ne fonctionne pas
- Attendez quelques minutes après la configuration DNS
- Netlify/Vercel active automatiquement HTTPS
- Si ça ne fonctionne pas après 1 heure, contactez le support

### Le site charge mais les images ne s'affichent pas
- Vérifiez que tous les fichiers images sont bien uploadés
- Vérifiez les chemins des images dans le code

---

## 📞 Besoin d'aide ?

- **Netlify Support** : [docs.netlify.com](https://docs.netlify.com)
- **Vercel Support** : [vercel.com/docs](https://vercel.com/docs)
- **Vérification DNS** : [whatsmydns.net](https://www.whatsmydns.net)

---

**Bon déploiement ! 🎉**



