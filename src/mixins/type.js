export default {
  computed: {
    type() {
      let type;
      switch (this.status.type) {
        case 'ScenicSpot':
          type = '探索景點';
          break;
        case 'Activity':
          type = '節慶活動';
          break;
        case 'Restaurant':
          type = '品嘗美食';
          break;
        default:
      }
      return type;
    },
  },
};
