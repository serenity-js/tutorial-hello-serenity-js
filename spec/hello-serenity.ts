import { actorCalled, configure, Log } from '@serenity-js/core'
import { ConsoleReporter } from '@serenity-js/console-reporter'

configure({
    crew: [
        ConsoleReporter.forDarkTerminals(),
    ]
})

const Alice = actorCalled('Alice')

Alice.attemptsTo(
    Log.the('Hello Serenity/JS'),
)
