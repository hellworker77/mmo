using Application.DTOs;
using Application.DTOs.LimitedLiabilityCompany;
using Domain.Enums;

namespace Infrastructure.Extensions;

internal static class LimitedLiabilityCompanyExtensions
{
    public static IList<MediaDto> GetMedias(this LimitedLiabilityCompanyDto limitedLiabilityCompany)
    {
        var medias = new List<MediaDto>
        {
            new MediaDto
            {
                File = limitedLiabilityCompany.ScanINN,
                Type = MediaType.INN
            },
            new MediaDto
            {
                File = limitedLiabilityCompany.ScanOGRN,
                Type = MediaType.OGRN
            },
            new MediaDto
            {
                File = limitedLiabilityCompany.ScanEGRIP,
                Type = MediaType.EGRIP
            }
        };

        if (limitedLiabilityCompany.ScanContract != null)
        {
            medias.Add(new MediaDto
            {
                File = limitedLiabilityCompany.ScanContract,
                Type = MediaType.Contract
            });
        }

        return medias;
    }
}