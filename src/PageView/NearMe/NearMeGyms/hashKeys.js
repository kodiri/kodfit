let hashG = 'A£%I*<za^£S!yA?|Hs£3$R&iK(CG>gJ/>h@$l<@l5{#xX*£K?%$jL£Fq!p<,r/:Ai@6$-L*W>3<?Rc'
let hashH = 'b£Y#n%1_^n$%n2^&_C*Y>/D{A2.9?oV@v:c#i}b*uL^&4$%o£t^@p><Q:L}3F(0^&*HI$%F^!5a£>Bn<%lc$&@W4'
let specialChar = ['!','£','$','%','^','&','*','(',')','<',',','.','?','/','@',';',':','#','{','}','|','>'];
export let getGKey = () => {
  return hashG.split('').filter(char => !specialChar.includes(char)).join('')
}
export let getHKey = () => {
  return hashH.split('').filter(char => !specialChar.includes(char)).join('')
}