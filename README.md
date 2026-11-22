# ABEF Sentiers : l'appli Android

C'est la carte ABEF Sentiers (tracé sur tous les chemins OSM et IGN, distance, dénivelé, temps) sous forme d'appli Android.
Elle enregistre la trace GPS **écran éteint** et fonctionne **hors ligne** dans les zones téléchargées.

## Obtenir le fichier d'installation (APK) sans rien installer : GitHub

1. Créez un compte gratuit sur https://github.com, puis un dépôt : **New repository**, nom `abef-sentiers`, **Private**, puis **Create repository**.
2. Sur la page du dépôt, cliquez sur **uploading an existing file**. Glissez-y **tout le contenu** de ce dossier, y compris le dossier `.github`. Validez avec **Commit changes**.
   - Sur Mac, le dossier `.github` est masqué dans le Finder : affichez-le avec Cmd + Maj + point.
3. Ouvrez l'onglet **Actions**. La compilation « Appli Android » démarre toute seule et dure de 5 à 10 minutes.
4. Quand elle est verte, ouvrez-la et téléchargez **abef-sentiers-apk** en bas de la page. Vous obtenez un zip qui contient `abef-sentiers.apk`.

Si la compilation échoue (croix rouge), ouvrez-la et copiez le message d'erreur à Claude.

## Installer sur le téléphone

1. Copiez `abef-sentiers.apk` sur le téléphone (câble USB, Drive, mail…), puis touchez-le dans l'appli Fichiers.
2. Android demande d'autoriser l'installation d'applis inconnues pour cette appli : acceptez.
3. Au premier enregistrement, autorisez la **position** et les **notifications**.
4. Réglez la batterie de l'appli sur **Sans restriction**, surtout sur Samsung, Xiaomi, Huawei ou Oppo : Paramètres › Applications › ABEF Sentiers › Batterie.

Les versions suivantes s'installent par-dessus la précédente, sans perdre vos parcours. La clé de signature `android/app/abef-sentiers.keystore` doit rester dans le dépôt, et le dépôt doit rester **privé**.

## Utilisation sur le terrain

- **Avant de partir (avec réseau)** : bouton nuage › « Autour du parcours » ou « Zone affichée ». Ce bouton télécharge le fond IGN, les chemins et les altitudes.
- **Enregistrer** : bouton rond rouge. Une notification « ABEF Sentiers enregistre votre trace » reste affichée, et vous pouvez éteindre l'écran.
- Le bouton retour d'Android met l'appli en arrière-plan sans arrêter l'enregistrement.

## Autre solution : Android Studio sur ordinateur

Installez Node.js 22 et Android Studio, puis lancez `npm ci` et `npx cap sync android` dans ce dossier. Ouvrez ensuite le dossier `android` dans Android Studio et faites **Build › Build APK(s)**.

## Mettre à jour la carte

La carte se trouve dans `www/index.html`. Après une modification, envoyez le fichier sur GitHub : un nouvel APK est compilé automatiquement.
Le même dossier `www` sert aussi de version web, par exemple sur Netlify.
