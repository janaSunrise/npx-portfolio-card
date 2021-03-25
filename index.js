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
            name: `Toss me an ${chalk.blue.bold("email")}?`,
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
    title: chalk.hex('#6495ED')('ML and Web developer and a cybersecurity enthusiast.'),
    fact: chalk.hex('#00FFFF')('I love watching animes and learning new things!'),
    email: chalk.hex('#5887FF')('mailto:warriordefenderz@gmail.com'),
    discord: chalk.hex('#44BBA4')('https://discord.com/users/711194921683648523'),
    twitter: chalk.hex('#55C1FF')("https://twitter.com/janaSunrise"),
    github: chalk.hex('#E3DAFF')("https://github.com/janaSunrise"),
    hashnode: chalk.hex('#C589E8')("https://thedevden.hashnode.dev"),
    linkedin: chalk.hex('#f8c471')("https://linkedin.com/in/SunritJana"),
    website: chalk.hex('#9FFFCB')("https://sunritjana.now.sh"),
    npx: chalk.hex('#06D6A0')("npx sunrit"),

    labelTitle: chalk.hex('#6a8ed2').bold("    Title:"),
    labelFact: chalk.hex('#2bfbaa').bold("     Fun Fact:"),
    labelEmail: chalk.hex('#12c2e9').bold("          Email:"),
    labelDiscord: chalk.hex('#7AE582').bold("        Discord:"),
    labelTwitter: chalk.hex('#28DCD4').bold("        Twitter:"),
    labelGitHub: chalk.hex('#C0BABC').bold("         GitHub:"),
    labelHashnode: chalk.hex('#A959FF').bold("       Hashnode:"),
    labelLinkedin: chalk.hex('#F8C537').bold("       LinkedIn:"),
    labelWebsite: chalk.hex('#59FFC8').bold("        Website:"),
    labelCard: chalk.hex('#76e600').bold("                  Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelTitle}  ${data.title}`,
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
        `${chalk.hex('#08e8de').bold(
            "Hi there! I'm Sunrit. A passionate ML developer, "
        )}`,
        `${chalk.hex('#08e8de').bold("Hacker and Web developer from India, and I love to ")}`,
        `${chalk.hex('#08e8de').bold(
            "learn things, explore and work on them! "
        )}`,
        `${chalk.hex('#08e8de').bold(
            "Toss me an email or twitter DM if you want to contact or work!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        padding: 1,
        float: 'center',
        borderStyle: "bold",
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

