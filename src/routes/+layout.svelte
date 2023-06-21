<script>
  import { page } from '$app/stores'
</script>

<header class="d-flex justify-content-center py-3">
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a
        href="/"
        class="nav-link"
        class:active={$page.url.pathname == '/'}
        aria-current="page">Home</a
      >
    </li>
    <li class="nav-item">
      <a
        href="/todo"
        class="nav-link"
        class:active={$page.url.pathname == '/todo'}>Tasks</a
      >
    </li>
  </ul>
</header>
<div class="container">
  <slot />
</div>
