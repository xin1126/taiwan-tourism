export default {
  methods: {
    detailed(data, type) {
      const newData = data;
      newData.type = type;
      this.$store.commit('getDetailed', newData);
      this.$store.commit('getStatus', { type });
      this.$router.push('/detailed');
    },
  },
};
