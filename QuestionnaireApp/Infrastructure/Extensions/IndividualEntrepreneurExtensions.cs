using Application.DTOs;
using Domain.Enums;

namespace Infrastructure.Extensions;

internal static class IndividualEntrepreneurExtensions 
{
    public static IList<MediaDto> GetMedias(this IndividualEntrepreneurDto individualEntrepreneur)
    {
        var medias = new List<MediaDto>
        {
            new MediaDto
            {
                File = individualEntrepreneur.ScanINN,
                Type = MediaType.INN
            },
            new MediaDto
            {
                File = individualEntrepreneur.ScanOGRNIP,
                Type = MediaType.OGRNIP
            },
            new MediaDto
            {
                File = individualEntrepreneur.ScanEGRIP,
                Type = MediaType.EGRIP
            }
        };

        if (individualEntrepreneur.ScanContract != null)
        {
            medias.Add(new MediaDto
            {
                File = individualEntrepreneur.ScanContract,
                Type = MediaType.Contract
            });
        }

        return medias;
    }
}