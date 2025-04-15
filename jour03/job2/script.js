$(document).ready(function () {
    function melangerImages() {
      const images = $('#rainbow img').toArray();
      images.sort(() => Math.random() - 0.5);
      $('#rainbow').empty().append(images);
    }
  
    $('#melanger').click(function () {
      melangerImages();
      $('#result').text('').css('color', '');
    });
  
    $('#rainbow').sortable({
      stop: function () {
        verifierOrdre();
      }
    });
  
    function verifierOrdre() {
      const ordre = $('#rainbow img').map(function () {
        return $(this).data('id');
      }).get();
  
      const gagne = ordre.join('') === '123456';
  
      if (gagne) {
        $('#result').text("Vous avez gagné").css('color', 'green');
      } else {
        $('#result').text("Vous avez perdu").css('color', 'red');
      }
    }
  });
  