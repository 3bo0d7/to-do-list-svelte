<script>
  import App1 from '../../components/App1.svelte'
  import App2 from '../../components/App2.svelte'
</script>

<h1>My tasks</h1>
<p>Here you can create a to-do list</p>
<App1 name={'Peter'}>In betwen</App1>
<App2 taskname={'Home Task'} />
<App2 taskname={'Work Task'} />
