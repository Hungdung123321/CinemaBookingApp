import React from 'react'
import { AppText_light, StyledScrollView, StyledView } from '../../../../components/ui/StyledComponents'
import { APP_BUTTON_MODE } from '../../../../constants/commons'
import { AppButton, DescriptionItem } from '../../../../components'
import { TimeStampToDate } from '../../../../helper/converts'
import { Score, Trailer } from '..'

const About = (props) => {

    const { data, SelectSessionOnpress, jumpTo, AboutButtonText } = props
    const {
        Cast,
        Certificate,
        Director,
        Genre,
        Imdb,
        Release,
        Runtime,
        Url,
    } = data

    return (
        <StyledView className={'relative flex-1 bg-Dark-Gunmetal'}>
            <Trailer Url={Url} />
            <StyledView className={'w-full h-5rem flex-row bg-Yankees-Blue'}>
                <Score score={Imdb} label={'IMDB'} />
                <StyledView className={'w-0.0625rem bg-Cornflower-Blue opacity-10'} />
                <Score score={Imdb} label={'Kinopoisk'} />
            </StyledView>
            <StyledView className={'px-1rem'}>
                <AppText_light className={'text-sm text-white mx-auto my-1rem'}>
                    When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.
                </AppText_light>
                <StyledScrollView className={'w-full h-12rem px-0.5rem'}>
                    <DescriptionItem
                        container={'mb-0.5rem'}
                        title={'Certificate'}
                        description={Certificate}
                    />
                    <DescriptionItem
                        container={'mb-0.5rem'}
                        title={'Runtime'}
                        description={TimeStampToDate(Runtime)}
                    />
                    <DescriptionItem
                        container={'mb-0.5rem'}
                        title={'Release'}
                        description={Release}
                    />
                    <DescriptionItem
                        container={'mb-0.5rem'}
                        title={'Genre'}
                        description={Genre}
                    />
                    <DescriptionItem
                        container={'mb-0.5rem'}
                        title={'Director'}
                        description={Director}
                    />
                    <DescriptionItem
                        container={'mb-0.5rem'}
                        title={'Cast'}
                        description={Cast}
                    />
                </StyledScrollView>
            </StyledView>
            <StyledView className={'w-full h-5.375rem px-2rem absolute bottom-0 bg-Yankees-Blue'}>
                <AppButton
                    Mode={APP_BUTTON_MODE.LIGHT}
                    Text={AboutButtonText}
                    StyleButton={'w-full my-auto'}
                    onPress={() => SelectSessionOnpress(jumpTo)}
                />
            </StyledView>
        </StyledView>
    )
}

export default About