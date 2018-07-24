<template>
    <div>
        <p>- {{ commentObj.body }}</p>
    </div>
</template>

<script>
export default {
    props: {
        commentObj: Object
    }
}
</script>
