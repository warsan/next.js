# С env Из next.config.js

Этот пример демонстрирует установку параметров, которые будут использоваться вашим приложением и устанавливаться во время сборки (не во время выполнения).
Более конкретно, это означает, что переменные среды программируются в специальный конфигурационный файл `next.config.js` и затем
возвращается в ваши компоненты react, когда программа собирается с помощью `next build`.

По мере выполнения процесса сборки (`next build`) обрабатывается файл `next.config.js`, который передается в качестве параметра в переменную `phase`.
`phase` может иметь значения `PHASE_DEVELOPMENT_SERVER` или `PHASE_PRODUCTION_BUILD` (как определено в `next\constants`). На основе переменной
`phase`, различные переменные окружения могут быть установлены для использования в вашем приложении react. То есть, если вы ссылаетесь на `process.env.RESTURL_SPEAKERS`.
в вашем приложении react, все, что возвращается `next.config.js` в качестве переменной `env`, (или `env.RESTURL_SPEAKERS`) будет доступно в вашем
app как `process.env.RESTURL_SPEAKERS`.

Для получения дополнительной информации просмотрите документацию по [`next.config.js`](https://nextjs.org/docs/api-reference/next.config.js/introduction).

## Предварительный просмотр

Предварительный просмотр примера в прямом эфире на [StackBlitz](http://stackblitz.com/):

[![Открыть в StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-env-from-next-config-js)

## Разверните свой собственный

Разверните пример, используя [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Развернуть с Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-env-from-next-config-js&project-name=with-env-from-next-config-js&repository-name=with-env-from-next-config-js)

## Как использовать

Выполните [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) с [npm](https://docs.npmjs.com/cli/init) или [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) для загрузки примера:

```bash
npx create-next-app --example with-env-from-next-config-js with-env-from-next-config-js-app
# или
yarn create next-app --example with-env-from-next-config-js with-env-from-next-config-js-app
```

Разверните его в облаке с помощью [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

> ## Особое примечание
>
> `next build` выполняет жесткую подстановку переменных в ваш JavaScript перед созданием финального пакета. Это означает
> что если вы изменяете переменные окружения вне запущенного приложения, например, в windows с помощью `set` или в linux с помощью `setenv`.
> эти изменения не будут отражены в вашем работающем приложении, пока сборка не произойдет снова (с `next build`).

## Обсуждение данного примера

Этот пример не является эталоном того, как следует выполнять разработку, постановку и
производственные сборки с Next. Это лишь один из возможных сценариев, который можно использовать, если вы хотите, чтобы
следующее поведение во время разработки.

- Когда вы запускаете `next dev` или `npm run dev`, вы всегда будете использовать переменные окружения, назначенные, когда `isDev` имеет значение true в примере.
- Когда вы запустите `next build`, а затем `next start`, при условии, что вы установили внешнюю переменную окружения STAGING в любое значение, кроме 1, вы получите результаты, предполагающие, что `isProd` истинен.
- Когда вы запускаете `next build` или `npm run build` в production, если переменная окружения `STAGING` установлена в `1`, `isStaging` будет установлена, и вы получите эти значения обратно.

Подробнее об этой функции вы можете прочитать в этой записи блога <a href="https://vercel.com/blog/next5-1" target="_blank">Next.js 5.1: Ускоренное разрешение страницы, настройка среды и многое другое</a> (в разделе Настройка среды).
