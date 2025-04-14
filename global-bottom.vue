<template>
    <footer 
    v-if="$nav.currentLayout !== 'two-cols-header'"
    >Alain BEGEY & Alhusaine NEMER
        <span  v-if="$page>1" class="page-number">
            page {{ $page }}
        </span>
    </footer>
</template>