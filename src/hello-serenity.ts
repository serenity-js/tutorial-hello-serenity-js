import { actorCalled, configure, Log } from '@serenity-js/core'    // 1 
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
