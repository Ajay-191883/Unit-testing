import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {

  let pipe: StrengthPipe;

  beforeEach(()=>{
    pipe = new StrengthPipe()
  })


  it('create an instance', () => {
    
    expect(pipe).toBeTruthy();
  });
  
  it('should display weak if 5 value is passed', ()=> {
    
    expect(pipe.transform(5)).toEqual("5 Weak")
  })
  it('should display strong if 15 value is passed', ()=> {
    
    expect(pipe.transform(15)).toEqual("15 Strong")
  })
  it('should display strongest if 25 value is passed', ()=> {
    
    expect(pipe.transform(25)).toEqual("25 Strongest")
  })
});
