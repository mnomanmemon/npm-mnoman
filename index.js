const {
    white,
    bold,
    blueBright
  } = require("colorette");
  
  const work = white(`Staff Software Engineer @ ${blueBright('10Pearls')}`)
  const twitter = blueBright('https://twitter.com/mnomanmemon')
  const linkedIn = blueBright('https://linkedin.com/in/mnomanmemon')
  const github = blueBright('https://github.com/mnomanmemon')
  const stackoverflow = blueBright('https://stackoverflow.com/story/mnomanmemon')
  const medium = blueBright('https://medium.com/@mnomanmemon')
  const web = blueBright('https://imnoman.com')
  const npx = white('npx mnoman')
  
  const newline = '\n'
  const heading = `${white('  Muhammad Noman /')} ${blueBright('mnoman')}`
  const working = `${white(bold('          Work:'))}  ${work}`
  const linkedining = `${white(bold('      LinkedIn:'))}  ${linkedIn}`
  const twittering = `${white(bold('       Twitter:'))}  ${twitter}`
  const githubing = `${white(bold('        GitHub:'))}  ${github}`
  const stackoverflowing = `${white(bold(' Stackoverflow:'))}  ${stackoverflow}`;
  const mediuming = `${white(bold('        Medium:'))}  ${medium}`;
  const webing = `${white(bold('     Portfolio:'))}  ${web}`;
  const carding = `${white(bold('          Card:'))}  ${npx}`
  
  let output = `${newline} ${newline} ${heading} ${newline} ${newline} ${working} ${newline} ${webing} ${newline} ${mediuming} ${newline} ${twittering} ${newline} ${githubing} ${newline} ${linkedining} ${newline} ${stackoverflowing} ${newline} ${newline} ${carding} ${newline} ${newline}`;
  
  console.log(output)