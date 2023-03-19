function threeSum(arr, target) {
// write your code here
	let ans = Number.MAX_VALUE;
  arr.sort((a,b) => a-b);
  for(let i = 0;i<arr.length-2;i++){
	 for(let j = i+1;j<arr.length-1;j++){
		 for(let k = j+1;k<arr.length;k++){
			 let x = arr[i]+arr[j]+arr[k];
			 if(check(ans,x,target)){
				 ans = x;
			 }
		 }
	 }
  }
	return ans;
}

function check(ans,x,k) {
	let a = Math.abs(ans-k);
	let b = Math.abs(k-ans);
	if(b<a)a=b;

	let p = Math.abs(k-x);
	let q = Math.abs(x-k);
	if(q<p)p=q;

	if(a<p)return false;

	return true;
}
module.exports = threeSum;
