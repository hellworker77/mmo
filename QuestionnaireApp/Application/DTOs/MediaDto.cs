using Domain.Enums;
using Microsoft.AspNetCore.Http;

namespace Application.DTOs;

public class MediaDto
{
    public Guid? IndividualEntrepreneurId { get; set; }
    public Guid? LimitedLiabilityCompanyId { get; set; }
    
    public MediaType Type { get; set; }
    public IFormFile File { get; set; }
}