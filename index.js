#!/usr/bin/env node
const boxen = require('boxen');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
const open = require('open');

// Clear the console
clear();

const generate = text => {
  const theme = {
    colors: [
      '#FFFFFF',
      '#7285B7',
      '#FF9DA4',
      '#FFC58F',
      '#FFEEAD',
      '#D1F1A9',
      '#99FFFF',
      '#BBDAFF',
      '#EBBBFF',
      '#718c00',
      '#c82829',
      '#3e999f',
      '#6796e6',
      '#cd9731',
      '#f44747',
      '#b267e6'
    ],
    background: '#002451',
    foreground: '#ffffff'
  };

  let horizontalLayout = 'default';
  let verticalLayout = 'default';
  let font = 'ANSI Shadow';

  let coloredData = '';
  let colorsIndex = 0;
  let data;

  try {
    data = figlet.textSync(text, {
      font: font,
      horizontalLayout: horizontalLayout,
      verticalLayout: verticalLayout
    });
  } catch (error) {
    return error;
  }
  for (let i = 0; i < data.length; i++) {
    let character = data.charAt(i);
    if (character !== '_') {
      if (
        data.charAt(i - 1) === '_' ||
        data.charAt(i - 1) === ' ' ||
        data.charAt(i - 1) === '.'
      ) {
        colorsIndex++;
        if (colorsIndex >= theme.colors.length) {
          colorsIndex = 0;
        }
      }
      coloredData += chalk
        .hex(theme.colors[colorsIndex])
        .bgHex(theme.background)(data.charAt(i));
    } else {
      coloredData += chalk.hex(theme.foreground).bgHex(theme.background)(
        data.charAt(i)
      );
    }
  }
  return coloredData;
};

let name;
if (process.stdout.columns >= 95) {
  name = chalk.bold(generate('                        Sunrit Jana ⬢'));
} else {
  name = chalk.bold.blueBright('                        Sunrit Jana ⬢');
}

const data = {
  name: name,
  handle: chalk.white('@janaSunrise'),
  title: chalk.hex('#6495ED')(
    'A Machine learning expert, Full-stack developer and Budding Ethical hacker'
  ),
  fact: chalk.hex('#00FFFF')(
    'I love watching animes, explore, learn and build something incredible!'
  ),
  email: chalk.hex('#5887FF')('mailto:warriordefenderz@gmail.com'),
  discord: chalk.hex('#44BBA4')('https://discord.com/users/711194921683648523'),
  twitter: chalk.hex('#55C1FF')('https://twitter.com/janaSunrise'),
  github: chalk.hex('#E3DAFF')('https://github.com/janaSunrise'),
  hashnode: chalk.hex('#C589E8')('https://thedevden.hashnode.dev'),
  linkedin: chalk.hex('#f8c471')('https://linkedin.com/in/SunritJana'),
  website: chalk.hex('#9FFFCB')('https://sunritjana.now.sh'),
  npx: chalk.hex('#06D6A0')('npx sunrit'),

  labelTitle: chalk.hex('#6a8ed2').bold('    Title:'),
  labelFact: chalk.hex('#2bfbaa').bold('     Fun Fact:'),
  labelEmail: chalk.hex('#12c2e9').bold('          Email:'),
  labelDiscord: chalk.hex('#7AE582').bold('        Discord:'),
  labelTwitter: chalk.hex('#28DCD4').bold('        Twitter:'),
  labelGitHub: chalk.hex('#C0BABC').bold('         GitHub:'),
  labelHashnode: chalk.hex('#A959FF').bold('       Hashnode:'),
  labelLinkedin: chalk.hex('#F8C537').bold('       LinkedIn:'),
  labelWebsite: chalk.hex('#59FFC8').bold('        Website:'),
  labelCard: chalk.hex('#76e600').bold('                  Card:')
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelTitle}  ${data.title}`,
    ``,
    `${data.labelFact}  ${data.fact}`,
    ``,
    `${data.labelEmail}     ${data.email}`,
    `${data.labelDiscord}   ${data.discord}`,
    `${data.labelTwitter}   ${data.twitter}`,
    `${data.labelGitHub}    ${data.github}`,
    `${data.labelHashnode}  ${data.hashnode}`,
    `${data.labelLinkedin}  ${data.linkedin}`,
    `${data.labelWebsite}   ${data.website}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk
      .hex('#08e8de')
      .bold(
        "Hi there! I'm Sunrit. A ML expert, Full stack web developer and an Ethical"
      )}`,
    `${chalk
      .hex('#08e8de')
      .bold(
        'hacker from India. I love to explore, learn, innovate and build stuff!'
      )}`,
    `${chalk
      .hex('#08e8de')
      .bold(
        'Always trying to explore, learn, innovate, build and become better every day!'
      )}`,
    `${chalk
      .hex('#08e8de')
      .bold('Toss me an email or Twitter DM if you want to contact or work!')}`
  ].join('\n'),
  {
    margin: 1,
    padding: 1,
    float: 'center',
    borderStyle: 'bold',
    borderColor: 'blue'
  }
);

// Show the boxen
console.log(me);

// Show the tips
const tip = [
  `Tip: ${chalk.cyanBright.bold(
    'cmd/ctrl + click'
  )} on the links above to open them in your broswer.`,
  ''
];

if (process.stdout.columns < 95) {
  tip.push(
    ...[
      `Quick TIP: ${chalk.greenBright.bold(
        'Adjust your terminal to more than 95 columns to get an awesome art.'
      )}`,
      ''
    ]
  );
}

console.log(tip.join('\n'));

// Inquirer prompt
const prompt = inquirer.createPromptModule();

// Prompt questions
const questions = [
  {
    type: 'list',
    name: 'action',
    message: 'What do you want to do?',
    choices: [
      {
        name: `Toss me an ${chalk.blueBright.bold('email')}? 📩`,
        value: () => {
          open('mailto:warriordefenderz@gmail.com');
          console.log(
            '\nLooking forward to hearing your message and replying to you!\n'
          );
        }
      },
      {
        name: `Visit my ${chalk.cyanBright.bold('site')}? 🚀`,
        value: () => {
          open('https://sunritjana.now.sh');
          console.log('\nThanks for the visit to my site!\n');
        }
      },
      {
        name: 'Exit! 👋',
        value: () => {
          console.log('👋 See you later! Have a nice day\n');
        }
      }
    ]
  }
];

// Handle prompts
prompt(questions).then(answer => answer.action());
