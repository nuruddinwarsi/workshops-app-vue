<template
  ><nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container px-2">
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/" active-class="active" exact
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/workshops" active-class="active"
            >Workshops List</router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Feedback</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped></style>
