import React, { useEffect, useState } from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import { Checkbox } from '@radix-ui/react-checkbox';
import { AddonsOptions, Flex, FormDiv, Label, WrapperContainerStep3 } from '../styles/pages/step3';
import { useGlobalContext } from '../contexts/FormStepContext';

export default function Step3() {
  const { setAdditional } = useGlobalContext();
  const [packageStorage, setPackageStorage] = useState(false)
  const [addonMonth, setAddonMonth] = useState([
    {
      id: '1',
      name: "Online service",
      description: "Acess to multiplayer games",
      price: "$1/mo",
      value: 1,
      checked: false
    },
    {
      id: '2',
      name: "Advanced",
      description: "Extra 1TB of could save your game",
      price: "$2/mo",
      value: 2,
      checked: false
    },
    {
      id: '3',
      name: "Pro",
      description: "Custom theme on your profile",
      price: "$2/mo",
      value: 2,
      checked: false
    }
  ])

  const [addonYearly, setAddonYearly] = useState([
    {
      id: '1',
      name: "Online service",
      description: "Acess to multiplayer games",
      price: "$10/yr",
      value: 10,
      checked: false
    },
    {
      id: '2',
      name: "Advanced",
      description: "Extra 1TB of could save your game",
      price: "$20/yr",
      value: 20,
      checked: false
    },
    {
      id: '3',
      name: "Pro",
      description: "Custom theme on your profile",
      price: "$20/yr",
      value: 20,
      checked: false
    }
  ])

  const handleCheckboxChange = (id: any) => {
    if(!packageStorage) {
      const updatedCheckboxes = addonMonth.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      );
      setAddonMonth(updatedCheckboxes);
    } else {
      const updatedCheckboxes = addonYearly.map((checkbox) =>
      checkbox.id === id
      ? { ...checkbox, checked: !checkbox.checked }
      : checkbox
      );
      setAddonYearly(updatedCheckboxes);
    }
  };
  
  useEffect(() => {
    setAdditional(addonMonth)
  }, [addonMonth]);
  
  useEffect(() => {
    setAdditional(addonYearly)
  }, [addonYearly]);

  useEffect(() => {
    let localStoragePackage = localStorage.getItem('package');
    let localPackage = localStoragePackage?.includes('true') ? true : false
    setPackageStorage(localPackage)
  }, []);

  return (
    <WrapperContainerStep3>
      <FormDiv role='listadd'>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
        
        {
          packageStorage ? (
            <AddonsOptions>
              {addonYearly.map((addon) => (
                <Flex css={{ alignItems: 'center' }}>
                  <Checkbox
                    id={addon.id}
                    checked={addon.checked}
                    onCheckedChange={() => handleCheckboxChange(addon.id)}
                    style={{border: 'none'}}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '1rem',
                        height: '1rem',
                        background: addon.checked ? '#5426a3' : 'white',
                        borderRadius: '4px',
                        border: '1px solid #c4c4cc'
                      }}
                    >
                      {addon.checked && <CheckIcon style={{ color: 'white' }} />}
                    </div>
                  </Checkbox>

                  <Label css={{ paddingLeft: 15, color: '#0000ff' }} htmlFor="c1">
                    <h4>{addon.name}</h4>
                    <p>{addon.description}</p>
                  </Label>
                  <p style={{ color: '#0000ff' }}>{addon.price}</p>
                </Flex>
              ))}
            </AddonsOptions>
          ) : (
            <AddonsOptions role='listitemcheckboxMO'>
              {addonMonth.map((addon) => (
                <Flex css={{ alignItems: 'center' }}>
                  <Checkbox
                    id={addon.id}
                    checked={addon.checked}
                    onCheckedChange={() => handleCheckboxChange(addon.id)}
                    style={{border: 'none'}}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '1rem',
                        height: '1rem',
                        background: addon.checked ? '#5426a3' : 'white',
                        borderRadius: '4px',
                        border: '1px solid #c4c4cc'
                      }}
                    >
                      {addon.checked && <CheckIcon style={{ color: 'white' }} />}
                    </div>
                  </Checkbox>

                  <Label css={{ paddingLeft: 15, color: '#0000ff' }} htmlFor="c1">
                    <h4>{addon.name}</h4>
                    <p>{addon.description}</p>
                  </Label>
                  <p style={{ color: '#0000ff' }}>{addon.price}</p>
                </Flex>
              ))}
            </AddonsOptions>
          )
        }
      </FormDiv>
    </WrapperContainerStep3>
  )
}
