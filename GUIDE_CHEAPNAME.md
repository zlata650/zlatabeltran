# 🌐 Guide : Connecter votre site au domaine CheapName

Ce guide vous explique étape par étape comment connecter votre site au domaine acheté sur CheapName.com.

## 📋 Étapes à suivre

### ÉTAPE 1 : Déployer votre site sur Netlify (5 minutes)

1. **Allez sur [netlify.com](https://www.netlify.com)**
   - Créez un compte gratuit (vous pouvez utiliser votre email ou Google/GitHub)

2. **Déployez votre site :**
   - Option A : Allez sur [app.netlify.com/drop](https://app.netlify.com/drop)
   - Glissez-déposez **TOUT le contenu** du dossier "Zlata Beltran site" dans la zone
   - Votre site sera en ligne immédiatement !
   - Notez l'URL que Netlify vous donne (ex: `votre-site-123.netlify.app`)

3. **Vérifiez que votre site fonctionne :**
   - Cliquez sur l'URL Netlify pour voir votre site
   - Testez les deux versions : anglaise et française

---

### ÉTAPE 2 : Ajouter votre domaine dans Netlify (2 minutes)

1. **Dans Netlify, cliquez sur votre site**
2. Allez dans **Site settings** (en haut à droite)
3. Cliquez sur **Domain management** dans le menu de gauche
4. Cliquez sur **Add custom domain**
5. Entrez votre domaine (ex: `zlatabeltran.com`)
6. Cliquez sur **Verify**
7. Netlify vous donnera les instructions DNS à configurer

**Notez ces informations importantes :**
- L'URL Netlify de votre site (ex: `votre-site-123.netlify.app`)
- Les instructions DNS que Netlify vous donne

---

### ÉTAPE 3 : Configurer les DNS sur CheapName (10 minutes)

1. **Connectez-vous à votre compte CheapName.com**

2. **Accédez à la gestion DNS :**
   - Allez dans **Mes domaines** ou **Domain Management**
   - Trouvez votre domaine et cliquez dessus
   - Cherchez **DNS Management** ou **Gestion DNS** ou **Zone DNS**

3. **Configurez les enregistrements DNS :**

   #### A. Pour le domaine racine (zlatabeltran.com) :
   
   - **Type** : `A` (ou `A Record`)
   - **Nom/Host** : `@` ou laissez vide ou mettez juste un point `.`
   - **Valeur/Points to** : `75.2.60.5`
   - **TTL** : 3600 (ou laissez par défaut)
   - Cliquez sur **Ajouter** ou **Save**

   #### B. Pour www (www.zlatabeltran.com) :
   
   - **Type** : `CNAME` (ou `CNAME Record`)
   - **Nom/Host** : `www`
   - **Valeur/Points to** : `votre-site-123.netlify.app` (l'URL que Netlify vous a donnée)
   - **TTL** : 3600 (ou laissez par défaut)
   - Cliquez sur **Ajouter** ou **Save**

4. **Sauvegardez les modifications**

---

### ÉTAPE 4 : Attendre la propagation DNS (5-30 minutes)

- Les changements DNS peuvent prendre de **5 minutes à 48 heures**
- En général, cela fonctionne en **10-30 minutes**
- Vous pouvez vérifier la propagation sur [whatsmydns.net](https://www.whatsmydns.net)
  - Entrez votre domaine
  - Vérifiez que les enregistrements A et CNAME apparaissent

---

### ÉTAPE 5 : Vérifier que tout fonctionne

1. **Attendez 10-30 minutes** après avoir configuré les DNS

2. **Testez votre site :**
   - Visitez `http://zlatabeltran.com`
   - Visitez `https://zlatabeltran.com` (HTTPS sera activé automatiquement)
   - Visitez `www.zlatabeltran.com` (doit rediriger vers zlatabeltran.com)

3. **Vérifiez les deux versions :**
   - Version anglaise : `https://zlatabeltran.com`
   - Version française : `https://zlatabeltran.com/index-fr.html`

4. **Vérifiez sur mobile :**
   - Testez que le menu hamburger fonctionne
   - Vérifiez que tout s'affiche correctement

---

## 🔍 Où trouver les paramètres DNS sur CheapName ?

Si vous ne trouvez pas la gestion DNS sur CheapName :

1. **Cherchez dans le menu :**
   - "Mes domaines" / "My Domains"
   - "Gestion DNS" / "DNS Management"
   - "Zone DNS" / "DNS Zone"
   - "Paramètres DNS" / "DNS Settings"

2. **Ou contactez le support CheapName :**
   - Ils peuvent vous guider pour accéder à la gestion DNS
   - Ou ils peuvent configurer les DNS pour vous si vous leur donnez les valeurs

---

## 📝 Résumé des valeurs DNS à configurer

**Sur CheapName, configurez :**

| Type | Nom | Valeur | Description |
|------|-----|--------|-------------|
| A | @ | 75.2.60.5 | Domaine racine |
| CNAME | www | votre-site-123.netlify.app | Sous-domaine www |

*(Remplacez `votre-site-123.netlify.app` par l'URL réelle que Netlify vous a donnée)*

---

## ⚠️ Problèmes courants

### Le site ne charge pas après 30 minutes
- Vérifiez que les DNS sont bien sauvegardés sur CheapName
- Vérifiez la propagation sur [whatsmydns.net](https://www.whatsmydns.net)
- Vérifiez que vous avez bien utilisé l'URL Netlify correcte dans le CNAME

### HTTPS ne fonctionne pas
- Netlify active automatiquement HTTPS après la configuration DNS
- Attendez 10-30 minutes supplémentaires
- Si ça ne fonctionne pas après 1 heure, vérifiez dans Netlify > Domain settings

### Erreur "Domain not verified" dans Netlify
- Assurez-vous d'avoir bien configuré les DNS sur CheapName
- Attendez la propagation DNS (peut prendre jusqu'à 48h)
- Vérifiez que les valeurs DNS sont correctes

---

## 🆘 Besoin d'aide ?

1. **Support CheapName :** Contactez-les si vous avez des problèmes pour accéder à la gestion DNS
2. **Support Netlify :** [docs.netlify.com](https://docs.netlify.com) ou leur chat support
3. **Vérification DNS :** [whatsmydns.net](https://www.whatsmydns.net)

---

## ✅ Checklist finale

- [ ] Site déployé sur Netlify
- [ ] Domaine ajouté dans Netlify
- [ ] Enregistrement A configuré sur CheapName (@ → 75.2.60.5)
- [ ] Enregistrement CNAME configuré sur CheapName (www → votre-site.netlify.app)
- [ ] Attente de 10-30 minutes
- [ ] Test du site sur le domaine
- [ ] HTTPS fonctionne (cadenas vert dans le navigateur)
- [ ] Les deux versions (EN/FR) fonctionnent

**Une fois tout cela fait, votre site sera en ligne sur votre domaine ! 🎉**



