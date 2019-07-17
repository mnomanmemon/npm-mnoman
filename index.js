const {
    white,
    bold,
    blueBright
  } = require("colorette");
  
  const work = white(`Software Engineer II @ ${blueBright('AxGuru')}`)
  const twitter = blueBright('https://twitter.com/NomanM94')
  const linkedIn = blueBright('https://linkedin.com/in/mnoman94')
  const github = blueBright('https://github.com/m-noman')
  const stackoverflow = blueBright('https://stackoverflow.com/users/3276511/muhammad-noman')
  const medium = blueBright('https://medium.com/@mnomanmemon')
  const npx = white('npx mnoman')
  
  const newline = '\n'
  const heading = `${white('  Muhammad Noman /')} ${blueBright('mnoman')}`
  const working = `${white(bold('          Work:'))}  ${work}`
  const linkedining = `${white(bold('       LinkedIn:'))} ${linkedIn}`
  const twittering = `${white(bold('       Twitter:'))}  ${twitter}`
  const githubing = `${white(bold('        GitHub:'))}  ${github}`
  const stackoverflowing = `${white(bold(' Stackoverflow:'))}  ${stackoverflow}`;
  const mediuming = `${white(bold('        Medium:'))}  ${medium}`;
  const carding = `${white(bold('          Card:'))}  ${npx}`
  
  let output = `${newline} ${newline} ${heading} ${newline} ${newline} ${working} ${newline} ${twittering} ${newline} ${linkedining} ${newline} ${githubing} ${newline} ${mediuming} ${newline} ${stackoverflowing} ${newline} ${newline} ${carding} ${newline} ${newline}`;
  
  console.log(output)