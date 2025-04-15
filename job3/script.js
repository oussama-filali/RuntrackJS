$(document).ready(function () {
    const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", ""]; // le 9e vide
    let tiles = [];
  
    function melanger() {
      tiles = [...images].sort(() => Math.random() - 0.5);
      afficherTaquin();
      $('#result').text('');
      $('#restart').hide();
    }
  
    function afficherTaquin() {
      $('#taquin').empty();
      tiles.forEach((img, i) => {
        const div = $('<div class="tile"></div>');
        if (img) div.css('background-image', `url(${img})`).css('background-size', 'cover');
        div.data('index', i);
        $('#taquin').append(div);
      });
    }
  
    function indexCaseVide() {
      return tiles.indexOf("");
    }
  
    function deplacer(index) {
      const vide = indexCaseVide();
      const voisins = [vide - 1, vide + 1, vide - 3, vide + 3];
      if (voisins.includes(index) && Math.abs(vide % 3 - index % 3) + Math.abs(Math.floor(vide / 3) - Math.floor(index / 3)) === 1) {
        [tiles[vide], tiles[index]] = [tiles[index], tiles[vide]];
        afficherTaquin();
        verifierGagne();
      }
    }
  
    function verifierGagne() {
      const gagne = tiles.slice(0, 8).every((img, i) => img === images[i]);
      if (gagne) {
        $('#result').text("Vous avez gagné").css('color', 'green');
        $('#restart').show();
      }
    }
  
    $('#taquin').on('click', '.tile', function () {
      const index = $(this).data('index');
      deplacer(index);
    });
  
    $('#restart').click(function () {
      melanger();
    });
  
    melanger();
  });
  