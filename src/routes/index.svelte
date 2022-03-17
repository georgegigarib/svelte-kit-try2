<script>
    let title = "Title on a variable"

    const updateTitle = () => {
        title = "Something a little more different"
    }


</script>

<div class="index"></div>
<h2>{title}</h2>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, impedit aperiam? Ipsa facere, quod suscipit velit adipisci sapiente molestiae nemo deleniti obcaecati distinctio accusamus perspiciatis quia tenetur facilis repudiandae reprehenderit!</p>


<button on:click={updateTitle}>Change Title</button>

<input type="text" bind:value={title} placeholder="cambiar titulo con lo que escribas">

<p>Something else</p>

<a href="/about/">about</a>
<a href="/guides">guides</a>
<style></style>