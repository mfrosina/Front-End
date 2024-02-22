# Facebook like website

Имплементирайте `JavaScript` файловете (`/scripts`), според следните изисквания:

## Index Page

<img width="1364" alt="image" src="https://gist.github.com/assets/5821279/b886cb56-1692-43dd-8c72-62144dac87f5">

Когато потребител зареди `index.html` страницата, може да влезе чрез email и парола.
`Create new account` бутонът води към "/register.html".

Валидни потребители са следните:
- Email: bluesunshine92@example.com | Password: Sparkle789!
- Email: greenleaf45@example.com | Password: Nature2022!
- Email: silvermoon77@example.com | Password: LunaMagic#1
- Email: crimsonsky33@example.com | Password: SunsetDreams!22
- Email: azurewave19@example.com | Password: OceanBreeze123!

Ако данните са валидни, натискайки `Log in` бутона се навигира към `/home`.
Ако данните са невалидни се изписва съобщение за грешка в полето `<span class="login-error"></span>` (`index.html`).

- Грешна парола, но съществуваш email: текстът в полето за грешки трябва да е следния "Wrong password" и да се добави клас `invalid-field` на полето за парола
- Невалиден имейл: текстът в полето за грешки трябва да е следния "Invalid email format" и да се добави клас `invalid-field` на полето за email
- Валиден имейл, но няма такъв потребител: "There is no registered user with that email" и да се добави `invalid-field` на полето за email и на полето за парола
- Валидация (малки, големи букви и т.н.) за паролата тук **не се изисква**

<img width="413" alt="image" src="https://gist.github.com/assets/5821279/8ee561a1-017f-4e52-afe3-80decb92859b">
<img width="409" alt="image" src="https://gist.github.com/assets/5821279/b52b7e2d-0fdc-4326-8794-f192bc61e5c7">
<img width="411" alt="image" src="https://gist.github.com/assets/5821279/c3720efb-6042-482d-8641-aabfd730eca2">

## Register page

<img width="1365" alt="image" src="https://gist.github.com/assets/5821279/17474ee9-8294-4439-9b08-e10f82e49d00">

Когато потребител зареди `register` страницата, той може да се регистрира или да навигира обратно към index.html.
Натискайки иконката за back бива навигиран към `index.html`.
Имплементирайте валидации на полетата в `register.js` - `<span class="register-error"></span>`
- email: стандартна валидация за email (text@domain.---), когато потребител се регистрира с някой от вече регистрираните адреси да се изкарва грешка "Already registered email"
- password: малка, голя буква, символ, число и поне 8 символа дължина. При неспазване на някое правило да се визуализира грешка "Invalid password format"
- repeat password: да е същата като password. По време на писане на текста в това поле, то се валидира. При писане добавяйте класът `invalid-field` докато текстът в полето не стане същия като този в password.
- Ако всичко е наред и потребителя натисне `Log in` бива пренасочен към `/home` страницата.

<img width="407" alt="image" src="https://gist.github.com/assets/5821279/9613e296-7787-43e1-8935-b18e6118bde9">
<img width="404" alt="image" src="https://gist.github.com/assets/5821279/58a06ab5-5f35-4321-a1f8-c4d93caa53f2">
<img width="404" alt="image" src="https://gist.github.com/assets/5821279/3eb8b2b7-844a-4671-a445-6403c242cb46">

## Home

<img width="1368" alt="image" src="https://gist.github.com/assets/5821279/634df6e9-71fe-4b17-b018-3dd24d497c00">

Заредете данните от `posts.json` и ги визуализирайте под формата на постове в следния формат:
```html
<section class="post">
  <header>
    <img src="./public/user.jpeg" alt="user photo" class="user-photo">
    <div class="post-info">
      <span class="user-name">Martin Hristov</span> <!-- author -->
      <span class="post-time">3 hours ago</span> <!-- posted_before -->
    </div>

    <div class="delete-post">
      <img src="./public/delete.png" alt="delete post">
    </div>
  </header>

  <main>
    <span class="post-caption">Exploring new places! 🌍 #AdventureTime</span> <!-- caption -->
    <img class="post-image" src="https://disruptorsmagazine.com/wp-content/uploads/2023/03/pexels-oleksandr-pidvalnyi-3278215-1024x683.jpg" alt="Exploring new places! 🌍 #AdventureTime"> <!-- image_url -->
  </main>

  <footer class="post-footer">
    <div class="likes">266 likes</div> <!-- likes_count -->
    <div class="footer-actions">
      <button class="like-btn">Like</button>
      <button class="comment-btn">Comment</button>
    </div>
    <div class="comments"> <!-- comments [], може да са много, генерирайте ги динамично -->
      <div class="comment"> <!-- comments [0] -->
        <img class="comment-user-photo" src="./public/user.jpeg" alt="comment user photo">
        <div class="comment-text">
          <span class="comment-text-user">Martin Hristov</span> <!-- comments [0].author -->
          <span class="comment-text-text">Amazing!</span> <!-- comments [0].text -->
        </div>
      </div>
    </div>
  </footer>
</section>
```
- Добавете ги като деца в `<main class="posts">` (`home.html`).
- Имплементирайте бутона like да работи.
- Всяко кликане върху него увеличава броят likes
- Имплементирайте бутона `delete` на всеки пост. Той премахва поста от страницата.

**Стартиране на проекта:**

- за да стартирате проекта
- `npm install`
- `npm start`
- http://localhost:3000
- http://localhost:3000/register
- http://localhost:3000/home
- нямате право да пипате в **body тагът на HTML файловете**
- нека единствения код, който добавяте е в `home.js`, `index.js` и `register.js`

<img width="1366" alt="image" src="https://gist.github.com/assets/5821279/ae2fe428-4296-481f-ad46-e4fd82ca10fb">
<img width="1365" alt="image" src="https://gist.github.com/assets/5821279/591da78e-9254-47c0-9d80-091255d36fc5">
<img width="1370" alt="image" src="https://gist.github.com/assets/5821279/219b1605-740d-4176-bd44-0f849490d511">
<img width="1370" alt="image" src="https://gist.github.com/assets/5821279/23452ff2-d082-4ba8-a1f4-e3f43e04ca63">