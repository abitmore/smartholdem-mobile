export default async synchronizer => {
  await synchronizer.$store.dispatch('smartholder/getHolders')
}
