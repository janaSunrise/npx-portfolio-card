#!/usr/bin/env node
const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

// Clear the console
clear();

// Inquirer prompt
const prompt = inquirer.createPromptModule();

// Prompt questions
const questions = [{
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [
        {
            name: `Toss me an ${chalk.bold("email")}?`,
            value: () => {
                open("mailto:warriordefenderz@gmail.com");
                console.log("\nLooking forward to hearing your message and replying to you!\n");
            }
        },
        {
            name: "Exit",
            value: () => { console.log("See you later! Have a nice day\n"); }
        }
    ]
}];

const data = {
    name: chalk.bold.green("                        Sunrit Jana ⬢"),
    handle: chalk.white("@janaSunrise"),
    fact: chalk.hex('#00FFFF')('I love watching animes and learning new things!'),
    email: chalk.hex('#00FFFF')('mailto:warriordefenderz@gmail.com'),
    discord: chalk.hex('#ffe05a')('https://discord.com/users/711194921683648523'),
    twitter: chalk.hex('#00A1D9')("https://twitter.com/janaSunrise"),
    github: chalk.hex('#787878')("https://github.com/janaSunrise"),
    hashnode: chalk.hex('#330093')("https://thedevden.hashnode.dev"),
    linkedin: chalk.hex('#f5b041')("https://linkedin.com/in/SunritJana"),
    website: chalk.hex('#00AB9E')("https://sunritjana.now.sh"),
    npx: chalk.hex('#A1AB00')("npx sunrit"),

    labelFact: chalk.hex('#2bfbaa').bold("     Fun Fact:"),
    labelEmail: chalk.hex('#12c2e9').bold("          Email:"),
    labelDiscord: chalk.hex('#8562A3').bold("        Discord:"),
    labelTwitter: chalk.hex('#629DFF').bold("        Twitter:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("         GitHub:"),
    labelHashnode: chalk.hex('#A959FF').bold("       Hashnode:"),
    labelLinkedin: chalk.hex('#9FE2BF').bold("       LinkedIn:"),
    labelWebsite: chalk.hex('#59FFC8').bold("        Website:"),
    labelCard: chalk.hex('#76e600').bold("                  Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelEmail}  ${data.email}`,
        `${data.labelDiscord}  ${data.discord}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelHashnode}  ${data.hashnode}`,
        `${data.labelLinkedin}  ${data.linkedin}`,
        `${data.labelWebsite}  ${data.website}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Hi there! I'm Sunrit. A passionate ML developer, "
        )}`,
        `${chalk.bold("Hacker and Web developer from India, and I love to ")}`,
        `${chalk.bold(
            "learn things, explore and work on them! "
        )}`,
        `${chalk.bold(
            "Toss me an email or twitter DM if you want to contact or work!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

// Show the boxen
console.log(me);

// Show a tip
const tip = [
    `Tip: ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above to open them in your broswer.`,
    '',
].join("\n");
console.log(tip);

// Handle prompts
prompt(questions).then(answer => answer.action());

