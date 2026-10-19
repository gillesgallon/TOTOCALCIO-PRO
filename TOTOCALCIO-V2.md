# TOTOCALCIO PRO 2

Version activée le 19 octobre 2026.

- Un état unique pilote les 30 systèmes, les lignes, les groupes, le nombre de grilles et le coût.
- Deux rencontres communes par ligne ; pronostics indépendants par groupe.
- Sélecteurs de sport, compétition et équipe, avec saisie libre et champs compacts.
- Filtres de lignes, groupes ABC / DEF / GHI, verrouillage des saisies, retour et menu tactile.
- Récapitulatif complet, consultation grille par grille ou par lots de 20, copie, CSV et impression.
- Assistance de recopie manuelle pour Betclic et Winamax ; suivi distinct par site et contenu de grille.
- Sauvegarde automatique locale et bulletins nommés : ouvrir, renommer, dupliquer, exporter, supprimer.
- Import JSON v1/v2 avec aperçu et sauvegarde préalable ; export complet.
- Reprise des données reconnues de la version précédente. Les clés historiques ne sont pas supprimées.
- Copie de précaution lorsqu’un changement de système réduit les lignes ou groupes.
- Mode d’emploi intégré et installation via Chrome avec le logo existant.

## Limites explicites

Les données sont locales au navigateur et à l’appareil. L’export/import permet le transfert ; il n’existe pas de synchronisation cloud automatique. Les listes d’équipes sont indicatives. Le calendrier ouvre les sites officiels et n’importe pas de programme en direct. L’analyse prépare une demande de recherche, sans prétendre avoir réalisé une analyse automatisée. L’application ne se connecte pas aux comptes de paris et ne valide aucun pari.

## Validation

Tests locaux dans un DOM JavaScript : 30 systèmes, contraintes des combinaisons, composition et coûts, cas 6 et 8 triples, saisie commune et pronostics indépendants, sauvegarde/reprise/migration sans suppression, suivi de recopie par site, seuils de jeux au tennis, filtres, verrouillage et navigation tactile. Vérification Chrome : migration, sélection 6 triples, composition 6 lignes / 12 rencontres, champs de 31 px, récapitulatif avec noms réels, 12 rencontres par grille, changement de grille et sauvegardes.

Les versions précédentes restent récupérables dans l’historique Git. Le dernier commit avant la refonte est c7ac0197ea170165bd7d48b5a356ef8f10788d6a.
