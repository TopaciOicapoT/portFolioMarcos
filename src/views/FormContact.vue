<template>

<section class="containerSugerencias">
    <h2 class="containerSugerencias__title">Contact me</h2>
    <div id="sugerencias" class=" sugerencias">
      <form id="suggestion-form" class="form" action="https://formsubmit.co/molinamartinmarcos@gmail.com" method="POST">
        <div class="form-group">
          <label class="pb-2" for="name">Name: </label>
          <input type="text" class="form-control" id="name" name="name" required />
        </div>
        <div class="form-group ">
          <label class="pb-2" for="email" type="email" name="email">Email: </label>
          <input type="email" class="form-control" id="email" name="email" required />
        </div>
        <div class="form-group ">
          <label class="pb-2" for="mesagge" type="text" name="mesagge">Message: </label>
          <textarea class="form-control" id="suggestion" name="mesagge" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn">Enviar</button>
      </form>
    </div>
  </section>
</template>
<script setup>




</script>

<style scoped lang="scss">
@mixin titles() {
  margin: 30px;
  padding: 1rem;
  border: 2px solid rgb(137, 134, 134);
  box-shadow: 0px 1px 2px rgb(141, 137, 137), 1px 2px 3px rgb(204, 193, 193),
    1px 1px 4px rgb(159, 159, 159), 0px 0px 5px rgb(65, 64, 64) inset;
  border-radius: 5px;
  text-align: center;
  color: rgb(0, 0, 0);
  background: rgb(255, 255, 255);
}


.containerSugerencias {
  margin: 8rem 3rem 0rem 3rem;
  &__title {
    @include titles();
    text-shadow: 2px 2px 3px gray;
  }
  .sugerencias {
    display: flex;
    place-content: center;  
    font-size: 1.2em;
    @include titles();
    
    .form{
      display: flex;
      flex-direction: column;
      align-items: center;
      .form-group{
        padding: 2rem;
        text-align: center;

        input{
          width: 100%;
        }
      }
      button{
        color: aliceblue;
        background: linear-gradient(#010b4f, #000d63, #001499, #020b46, #000000);
      }
    }
  }

}
@media (max-width: 340px) {
  .containerSugerencias {
  margin: 8rem 3rem 0rem 3rem;
  &__title {
    @include titles();
    text-shadow: 2px 2px 3px gray;
  }
  .sugerencias {
    display: flex;
    place-content: center;  
    font-size: 1.2em;
    @include titles();
    
    .form{
      display: flex;
      flex-direction: column;
      align-items: center;
      .form-group{
        padding: 2rem;
        text-align: center;

        input{
          width: 100%;
        }
        textarea{
          width: 100%;
        }
      }
      button{
        color: aliceblue;
        background: linear-gradient(#010b4f, #000d63, #001499, #020b46, #000000);
      }
    }
  }

}
}

</style>
