
class VNode {
	constructor(nodeName:string,nodeType:number){
		this.nodeName=nodeName;
		this.nodeType=nodeType;
	}
	public nodeName:string;
	public nodeType:Number;
	public ele:any=null;
	public childNodes:Array<VNode>=[];
	public arrts:Array<string>=[];
}

export default VNode;