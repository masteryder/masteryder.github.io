<script lang="ts">
  export let first: boolean = false;
  export let id: string;
  export let value: number;
  export let unit: string = "Ftm";
</script>

<div {id} class="depth-indication{first==true ? '--first' : ''} underwater-text">
  <div class="depth-indication__indicator">
  </div>
  <div class="depth-indication__indication">
    <span class="value">{value}</span> <span class="unit">{unit}</span>
  </div>
</div>


<style>
  .depth-indication__indication{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    right: 20px;
    width: max-content;
  }
  .depth-indication__indicator{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    right: 4px;
    width: 30px;
    height: 50vh;
    background-position-y: center;
    background-image: url('https://www.blancpain.com/sites/default/files/landing-page-wod-2021/Graduation.png');
    background-repeat: repeat;
    -webkit-mask-image: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,.7) 25%, rgba(0,0,0,.7) 75%, rgba(0,0,0,0.2) 100% );
    mask-image: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,.7) 25%, rgba(0,0,0,.7) 75%, rgba(0,0,0,0.2) 100% );
  }

  .depth-indication {
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
  }

  .depth-indication--first {
    position: absolute;
    right: 0;
    top: -11.5vh;
    transform: none;
  }

  .depth-indication--first .depth-indication__indicator{
    height: 25vh;
    background-position-y: top;
    transform: none;
    -webkit-mask-image: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.2) 100% );
    mask-image: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.2) 100% );
  }
  .depth-indication--first .depth-indication__indication{
    top: 0%;
    transform: none;
    transform: translateY(-50%);
  }

  .depth-indication .value, .depth-indication--first .value{
    font-size: 10px;
    letter-spacing: 10px;
  }
  .depth-indication .unit, .depth-indication--first .unit{
    font-size: 10px;
  }

  @media screen and (max-width: 1119.8px) {
    .depth-indication, .depth-indication--first{
      display: none;
    }
  }

</style>