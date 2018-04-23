// Write your solution in this file!
const driver = {name: "Sam"}

function updateDriverWithKeyAndValue(driver, key, value){
  const driver2 = { ...driver };
  driver2.address = '11 Broadway'
  return driver2

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver.address = '12 Broadway'
  return driver

}

function deleteFromDriverByKey(driver, key){
  const driver2 = { ...driver };
  delete driver2.name
  return driver2
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver.name
  return driver

}
