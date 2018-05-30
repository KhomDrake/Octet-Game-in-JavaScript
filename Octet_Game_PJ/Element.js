class Elemento
{
    constructor(totalEl,sym,ion)
    {
      this.eletronsLastLayer = 0;
      this.totalEletrons = totalEl + ion;
      this.symbol = sym;
      this.ionValue = ion;
      this.perfectLayer = [2, 8, 18, 32, 32, 18, 8];
      this.layers = [];
      this.lastLayerIndex;
      this.Layers();
    }

    CombineTwo(toCombine)
    {
       if(this.eletronsLastLayer + toCombine.eletronsLastLayer == this.perfectLayer[this.lastLayerIndex] ||
         this.eletronsLastLayer + toCombine.eletronsLastLayer == this.perfectLayer[toCombine.lastLayerIndex] ||
         this.eletronsLastLayer - toCombine.eletronsLastLayer == this.perfectLayer[this.lastLayerIndex] &&
         (this.eletronsLastLayer + toCombine.eletronsLastLayer == this.perfectLayer[this.lastLayerIndex]
            || this.eletronsLastLayer + toCombine.eletronsLastLayer == this.perfectLayer[toCombine.lastLayerIndex]))
       {
          return true;
       }
        return false;
    }

    CombineThree(toCombine1, toCombine2)
    {
      if (this.eletronsLastLayer + toCombine1.eletronsLastLayer + toCombine2.eletronsLastLayer == this.perfectLayer[this.lastLayerIndex]
            || this.eletronsLastLayer + toCombine1.eletronsLastLayer + toCombine2.eletronsLastLayer == this.perfectLayer[toCombine1.LastLayersIndex]
            || this.eletronsLastLayer + toCombine1.eletronsLastLayer + toCombine2.eletronsLastLayer == this.perfectLayer[toCombine2.LastLayersIndex]
            || this.eletronsLastLayer - toCombine1.eletronsLastLayer - toCombine2.eletronsLastLayer == 0 && (this.eletronsLastLayer + toCombine1.eletronsLastLayer + toCombine2.eletronsLastLayer == this.perfectLayer[this.lastLayerIndex]
            || this.eletronsLastLayer + toCombine1.eletronsLastLayer + toCombine2.eletronsLastLayer == this.perfectLayer[toCombine1.lastLayerIndex]
            || this.eletronsLastLayer + toCombine1.eletronsLastLayer + toCombine2.eletronsLastLayer == this.perfectLayer[toCombine2.lastLayerIndex]))
      {
        return true;
      }
      return false;
    }

    Layers()
    {
        let eletrons = this.totalEletrons;
        let pos = 0;

        while(pos < 7)
        {
            if(eletrons - this.perfectLayer[pos] > 0)
            {
              eletrons -= this.perfectLayer[pos];
              this.layers.push(this.perfectLayer[pos]);
              pos++;
            }
            else
            {
              this.layers.push(eletrons);
              this.eletronsLastLayer = eletrons;
              this.lastLayerIndex = pos;
              break;
            }
        }
    }
}
