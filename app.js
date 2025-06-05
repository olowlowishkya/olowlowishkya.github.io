const commandInput = document.getElementById('command-input');
const outputDiv = document.getElementById('output');

function executeCommand(command) {
  let output = ''; 
  
  
 if (command.startsWith('/')) {
    switch (command.trim()) {
      case '/light':
       document.body.classList.remove("theme-dark");
          document.body.classList.add("theme-light");
          output.innerHTML += `<div>🎨 Thème clair activé</div>`;
		  commandInput.value = '';
          break;

        case "/dark":
          document.body.classList.remove("theme-light");
          document.body.classList.add("theme-dark");
          output.innerHTML += `<div>🌙 Thème sombre activé</div>`;
		  commandInput.value = '';
          break;

        default:
		  commandInput.value = '';
          break;
      }

      input.value = ""; // Clear input
      output.scrollTop = output.scrollHeight; // Scroll terminal to bottom
    }

  // Regarder si la commande commence par "cd"
  if (command.startsWith('cd ')) {
    switch (command.trim()) {
      case 'cd projets':
        window.location.href = 'MesProjets.html'; 
        break;
      case 'cd formations':
        window.location.href = 'MesFormations.html'; 
        break;
      case 'cd contacter':
        window.location.href = 'MeContacter.html'; 
        break;
      case 'cd accueil':
        window.location.href = 'Accueil.html'; 
        break;
		case 'cd jeu':
		window.location.href = 'Jeu.html';
		break;
      default:
        output = 'Commande inconnue. Essayez la commande "cd" suivi de la page où vous voulez vous rendre.';
        break;
    }
  }
  // Regarder si la commande commence par "cat"
  else if (command.startsWith('cat ')) {
    const subject = command.slice(4).trim(); // Vérifier l'information après "cat"

    switch (subject) {
      case 'prologin':
        output = "Prologin est un concours informatique que j'ai suivi en 2023. Il consiste en plusieurs épreuves où les participants doivent résoudre des problèmes complexes de programmation et de réflexion tels que des CTF, tri, recherche, parcours. Pour ma part j'ai réussi à me qualifier aux régionales auxquelles j'ai participé mais je n'ai pas réussi à me qualifier pour les finales";
        break;
      case 'pacman':
        output = "Le jeu Pacman que j'ai créé avec un ami est une version simple en pyhton où le joueur doit naviguer dans un labyrinthe pour collecter des points tout en évitant des fantômes. le jeu ainsi que les images et animations ont été faites par un ami et moi à l'aide de piskel";
        break;
      case 'plateforme':
        output = "Le jeu de plateforme est un projet en python où le joueur doit sauter entre différentes plateformes tout en évitant des obstacles et pièges. De plus des cases permettent de dash, nous avons également intégrer une fonction pour créer son propre niveau et plusieurs checkpoints. Les animations et images ont également été faites par nos soins ";
        break;
      default:
        output = "Désolé, je n'ai pas d'informations pour ce sujet. Essayez 'prologin', 'pacman', ou 'plateforme'.";
        break;
    }
  }

  else if (command.startsWith('mail ')) {
    const userEmail = command.slice(5).trim(); // Récupérer l'email de l'utilisateur

    if (userEmail) {
      const mailtoLink = `mailto:kiliozzi@yahoo.fr?subject=Message%20de%20${encodeURIComponent(userEmail)}&body=Envoyé%20par%20${encodeURIComponent(userEmail)}`;
      
      output = `<p>Pour envoyer un e-mail à <strong>kiliozzi@yahoo.fr</strong>, cliquez <a href="${mailtoLink}">ici</a>. Votre e-mail sera pré-rempli avec votre adresse : ${userEmail}.</p>`;
    } else {
      output = 'Veuillez spécifier un identifiant mail après la commande "mail".';
    }
  }
  else {
    output = 'Commande inconnue. Essayez la commande "cd" suivi de la page.';
  }

  outputDiv.innerHTML = `<p>${output}</p>`;
}

commandInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();

    const command = commandInput.value;

    executeCommand(command);

    commandInput.value = '';
  }
});






  


