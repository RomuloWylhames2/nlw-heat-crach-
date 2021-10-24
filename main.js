const LinksSocialMedia = {
  github: 'RomuloWylhames2',
  youtube: 'channel/UCSOjNH2arL4s6Jd8BhQSJ4w',
  facebook: 'profile.php?id=100009183919816',
  instagram: 'romulo_wylhames',
  twitter: 'ROMULOWYLHAMES1'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
