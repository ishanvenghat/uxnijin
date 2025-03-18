@echo off
mkdir src 2>nul
mkdir src\router 2>nul
mkdir src\components 2>nul
mkdir src\views 2>nul

echo. > src\main.js
echo. > src\App.vue
echo. > src\data.js
echo. > src\router\index.js

echo. > src\components\MenuOverlay.vue
echo. > src\components\ExperienceCard.vue
echo. > src\components\DesignWorkCard.vue
echo. > src\components\CreationCard.vue
echo. > src\components\BlogCard.vue
echo. > src\components\SocialLink.vue

echo. > src\views\Home.vue
echo. > src\views\MyExperience.vue
echo. > src\views\MyDesignWorks.vue
echo. > src\views\MyCreation.vue
echo. > src\views\MyThoughts.vue
echo. > src\views\SayHello.vue

echo Files created successfully!